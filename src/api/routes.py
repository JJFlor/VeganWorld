"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Product
from api.utils import generate_sitemap, APIException
from flask_cors import CORS

api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api)

@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

# Crear un nuevo producto
@api.route('/products', methods=['POST'])
def create_product():
    data = request.json
    new_product = Product(
        product_name=data['product_name'],
        price=data['price'],
        description=data['description'],
        image_url=data.get('image_url')  # Asegúrate de que la URL de la imagen se guarde
    )
    db.session.add(new_product)
    db.session.commit()
    return jsonify(new_product.serialize()), 201


# Obtener todos los productos
@api.route('/products', methods=['GET'])
def get_products():
    products = Product.query.all()
    return jsonify([product.serialize() for product in products]), 200

# Editar un producto
@api.route('/products/<int:product_id>', methods=['PUT'])
def update_product(product_id):
    data = request.json
    product = Product.query.get_or_404(product_id)
    
    product.product_name = data.get('product_name', product.product_name)
    product.price = data.get('price', product.price)
    product.description = data.get('description', product.description)
    
    db.session.commit()
    return jsonify(product.serialize()), 200

# Eliminar un producto
@api.route('/products/<int:product_id>', methods=['DELETE'])
def delete_product(product_id):
    product = Product.query.get_or_404(product_id)
    db.session.delete(product)
    db.session.commit()
    return jsonify({"message": "Product deleted successfully"}), 200