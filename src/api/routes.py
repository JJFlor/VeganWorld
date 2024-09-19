"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Partner, Inventory
from api.utils import generate_sitemap, APIException
from flask_cors import CORS
from flask_mail import Message
# from api.mail.mailer import send_email
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity

api = Blueprint('api', __name__)


# Allow CORS requests to this API
CORS(api)


@api.route('/register_user', methods=['POST'])
def register_user():
    body = request.json
    print(body)
    user = User.query.filter_by(email = body["email"]).first()
    if user is None:
        new_user = User(name = body["name"], email = body["email"], password = body["password"], address = body["address"], phone= body["phone"])
        db.session.add(new_user)
        db.session.commit()
        #generate Token
        access_token = create_access_token(identity = new_user.id)
        return jsonify({"msg":"User created", "token": access_token, "user": new_user.serialize()}), 200
    else:
        return jsonify({"msg":"User already exist, Log in"}), 401


@api.route('/register_partner', methods=['POST'])
def register_partner():
    body = request.json

    user = User.query.filter_by(email = body["email"]).first()
    partner = Partner.query.filter_by(email = body["email"]).first()

    if user is None and partner is None:
        new_partner = Partner(name = body["name"], email = body["email"], type_of_services = body["typeOfServices"], premium = body["premium"], address = body["address"], phone= body["phone"], about_us = body["aboutUs"])
        db.session.add(new_partner)
        db.session.commit()
        new_user = User(name = body["name"], email = body["email"], password = body["password"], address = body["address"], phone= body["phone"], partner_id = new_partner.id)
        db.session.add(new_user)
        db.session.commit()
        #generate Token
        access_token = create_access_token(identity = new_partner.id)
        return jsonify({"msg":"Partner created", "token": access_token, "user": new_user.serialize(), 'partner': new_partner.serialize()}), 200
    else:
        return jsonify({"msg":"Partner already exist, Log in"}), 401
    
@api.route('/getPartnerInfo', methods=['GET'])
@jwt_required()
def getPartnerInfo():
    body = request.json
    partner = Partner.query.filter_by(email = body["email"]).first()
    if partner is None:
        return jsonify({"msg":"Partner not found"}), 404
    else:
        return jsonify({"msg":"Ok", "partnerInfo": partner.serialize()}), 200
    
@api.route('/getAllPartnersInfo', methods=['GET'])
def getAllPartnersInfo():
    premiumPartners = Partner.query.filter_by(premium = True)
    if premiumPartners is None:
        return jsonify({"msg":"Partners not found"}), 404
    else:
        return jsonify({"msg":"Ok", "partners": [partner.serialize() for partner in premiumPartners]}), 200

@api.route('/getUserInfo', methods=['GET'])
@jwt_required()
def getUserInfo():
    body = request.json
    user = User.query.filter_by(email = body["email"]).first()
    if user is None:
        return jsonify({"msg":"User not found"}), 404
    else:
        return jsonify({"msg":"Ok", "userInfo": user.serialize()}), 200

    
@api.route('/edit-info', methods=['PUT'])
def edit_info():
    body = request.json
    partner = Partner.query.filter_by(email = body["email"]).first()
    
    if partner:
        # Actualiza los atributos del objeto existente
        partner.name = body.get("name")
        partner.email = body.get("email")
        partner.phone = body.get("phone")
        partner.address = body.get("address")
        partner.type_of_services = body.get("typeOfServices")
        partner.about_us = body.get("aboutUs")
        # Guarda los cambios en la base de datos
        db.session.commit()
        return jsonify({"msg": "Partner updated successfully"}), 200
    
    user = User.query.filter_by(email = body["email"]).first()
    if user:
        user.name = body.get("name")
        user.email = body.get("email")
        user.phone = body.get("phone")
        user.address = body.get("address")
        user.type_of_services = body.get("typeOfServices")
        user.about_us = body.get("aboutUs")
        # Guarda los cambios en la base de datos
        db.session.commit()
        return jsonify({"msg": "User updated successfully"}), 200
    else:
        return jsonify({"msg": "User/partner not found"}), 404

@api.route('/mailer/<address>', methods=['POST'])
def handle_mail(address):
   return send_email(address)

#create a route to authenticate users and return JWT token
@api.route('/log_in', methods = ['POST'])
def log_in():
    email = request.json.get("email", None)
    password = request.json.get("password", None)

    user = User.query.filter_by(email = email, password = password).first()
    if user is None:
        return jsonify({"msg":"Bad username or password"}), 403


    access_token = create_access_token(identity=user.id)
    return jsonify({"token":access_token, 'user': user.serialize()})

@api.route('/token', methods=['GET'])
@jwt_required()
def check_jwt():
    user_id = get_jwt_identity()
    user = User.query.get(user_id)
    if user:
        return jsonify({'success': True, 'user': user.serialize()}), 200
    return jsonify({'success': False, 'msg': 'Bad token'}), 401

#Protect one route with jwt_required, blocking petitions without a valid JWT 
@api.route('/protected', methods=['GET'])
@jwt_required()
def handle_protected():
    user_id = get_jwt_identity()
    user = User.query.get(user_id)   
    if user: 
        print(user.serialize()) 
        return  jsonify({'success': True, 'msg': 'Has logrado acceder a una ruta protegida '})
    return jsonify({'success': False, 'msg': 'Bad token'})


@api.route("/check_mail", methods=['POST'])
def check_mail():
    try:
        data = request.json
        print(data)
        user = User.query.filter_by(email=data['email']).first()
        print(user)
        if not user:
            return jsonify({'success': False, 'msg': 'email not found'}),404
        token = create_access_token(identity=user.id)
        result = send_email(data['email'], token)
        print(result)
        return jsonify({'success': True, 'token': token, 'email': data['email']}), 200
    except Exception as e:
        print('error: '+ e)
        return jsonify({'success': False, 'msg': 'something went wrong'})

@api.route('/password_update', methods=['PUT'])
@jwt_required()
def password_update():
    try:
        data = request.json
        id = get_jwt_identity()
        user = User.query.get(id)
        user.password = data['password']
        db.session.commit()
        return jsonify({'success': True, 'msg': 'Contraseña actualizada exitosamente, intente iniciar sesion'}), 200
    except Exception as e:
        db.session.rollback()
        print('error: '+ e)
        return jsonify({'success': False, 'msg': 'something went wrong'})

# Crear un nuevo producto
@api.route('/products', methods=['POST'])
@jwt_required()
def create_product():
    user_id = get_jwt_identity()  # Obtén el user_id del token JWT
    data = request.json
    
    if not data or not all(key in data for key in ['product_name', 'price', 'description']):
        return jsonify({"error": "Missing required fields"}), 400
    
    try:
        new_product = Inventory(
            product_name=data['product_name'],
            price=data['price'],
            description=data['description'],
            image_url=data.get('image_url'),
            user_id=user_id  # Asigna el user_id al producto
        )
        db.session.add(new_product)
        db.session.commit()
        return jsonify(new_product.serialize()), 201
    except Exception as e:
        db.session.rollback()
        return jsonify({"error": str(e)}), 500


# Obtener todos los productos
@api.route('/products', methods=['GET'])
@jwt_required()
def get_products():
    try:
        products = Inventory.query.all()
        return jsonify([product.serialize() for product in products]), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500
    
    # Obtener productos por user_id
@api.route('/products/user', methods=['GET'])
@jwt_required()
def get_products_by_user():
    user_id = get_jwt_identity()  # Obtén el user_id del token JWT
    
    try:
        products = Inventory.query.filter_by(user_id=user_id).all()
        return jsonify([product.serialize() for product in products]), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500


# Editar un producto
@api.route('/products/<int:product_id>', methods=['PUT'])
@jwt_required()
def update_product(product_id):
    data = request.json
    product = Inventory.query.get_or_404(product_id)
    
    try:
        product.product_name = data.get('product_name', product.product_name)
        product.price = data.get('price', product.price)
        product.description = data.get('description', product.description)
        
        db.session.commit()
        return jsonify(product.serialize()), 200
    except Exception as e:
        db.session.rollback()
        return jsonify({"error": str(e)}), 500

# Eliminar un producto
@api.route('/products/<int:product_id>', methods=['DELETE'])
@jwt_required()
def delete_product(product_id):
    product = Inventory.query.get_or_404(product_id)
    
    try:
        db.session.delete(product)
        db.session.commit()
        return jsonify({"message": "Product deleted successfully"}), 200
    except Exception as e:
        db.session.rollback()
        return jsonify({"error": str(e)}), 500
