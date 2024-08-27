"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Partner, Inventory
from api.utils import generate_sitemap, APIException
from flask_cors import CORS
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity

api = Blueprint('api', __name__)


# Allow CORS requests to this API
CORS(api)


@api.route('/register_user', methods=['POST'])
def register_user():
    body = request.json
    user = User.query.filter_by(email = body["email"]).first()
    if user is None:
        new_user = User(name = body["name"], email = body["email"], password = body["password"])
        db.session.add(new_user)
        db.session.commit()
        #generate Token
        access_token = create_access_token(identity = new_user.id)
        return jsonify({"msg":"User created", "access token": access_token, "user": user.serialize()}), 200
    else:
        return jsonify({"msg":"User already exist, Log in"}), 401


@api.route('/register_partner', methods=['POST'])
def register_partner():
    body = request.json

    user = User.query.filter_by(email = body["email"]).first()
    partner = Partner.query.filter_by(email = body["email"]).first()

    if user is None and partner is None:
        new_partner = Partner(name = body["name"], email = body["email"], type_of_services = body["typeOfServices"], premium = body["premium"])
        db.session.add(new_partner)
        db.session.commit()
        new_user = User(name = body["name"], email = body["email"], password = body["password"], partner_id = new_partner.id)
        db.session.add(new_user)
        db.session.commit()
        #generate Token
        access_token = create_access_token(identity = new_partner.id)
        return jsonify({"msg":"Partner created", "access_token": access_token, "user": new_user.serialize(), 'partner': new_partner.serialize()}), 200
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


@api.route('/resetPassword', methods=['PUT'])
def reset_password():
    body = request.json
    email =  body.get("email")
    new_password =  body.get("password") 

    if not email or not new_password:
        return jsonify({"msg":"Email and password are required"}), 400

    user = User.query.filter_by(email=email).first()
    if user is None:
        return jsonify({"msg":"User not found"}), 404

    user.password = new_password
    db.session.commit()

    return jsonify({"msg":"Password got reset"}), 200

        
    
#create a route to authenticate users and return JWT token
@api.route('/log_in', methods = ['POST'])
def log_in():
    email = request.json.get("email", None)
    password = request.json.get("password", None)

    user = User.query.filter_by(email = email, password = password).first()
    if user is None:
        return jsonify({"msg":"Bad username or password"}), 401 


    access_token = create_access_token(identity=user.id)
    return jsonify({"token":access_token, 'user': user.serialize()})

# #Protect one route with jwt_required, blocking petitions without a valid JWT 
# @api.route('/private_profile', methods=['GET'])
# @jwt_required()
# def private_profile():
#     current_user_id = get_jwt_identity()
#     user = User.query.get(current_user_id)

#     return jsonify({"user_id": user.id}), 200




# Crear un nuevo producto
@api.route('/products', methods=['POST'])
@jwt_required()
def create_product():
    data = request.json
    
    if not data or not all(key in data for key in ['product_name', 'price', 'description']):
        return jsonify({"error": "Missing required fields"}), 400
    
    try:
        new_product = Inventory(
            product_name=data['product_name'],
            price=data['price'],
            description=data['description'],
            image_url=data.get('image_url')  # Asegúrate de que la URL de la imagen se guarde
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
