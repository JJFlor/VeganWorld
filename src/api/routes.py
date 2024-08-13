"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_cors import CORS
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity

api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api)


@api.route('/register', methods=['POST'])
def register():
    body = request.json
    user = User.query.filter_by(email = body["email"]).first()
    if user is None:
        new_user = User(name = body["name"], email = body["email"], password = body["password"])
        db.session.add(new_user)
        db.session.commit()
        #generate Token
        access_token = create_access_token(identity = new_user.id)
        return jsonify({"msg":"User created", "access token": access_token}), 200
    else:
        return jsonify({"msg":"User already exist, Log in"}), 401

#create a route to authenticate users and return JWT token
@api.route('/log_in', methods = ['POST'])
def log_in():
    email = request.json.get("email", None)
    password = request.json.get("password", None)

    user = User.query.filter_by(email = email, password = password).first()
    if user is None:
        return jsonify({"msg":"Bad username or password"}), 401 
    
    access_token = create_access_token(identity=user.id)
    return jsonify({"token":access_token, "user_id": user.id, "email": user.email})

#Protect one route with jwt_required, blocking petitions without a valid JWT 
@api.route('/private_profile', methods=['GET'])
@jwt_required()
def private_profile():
    current_user_id = get_jwt_identity()
    user = User.query.get(current_user_id)

    return jsonify({"user_id": user.id}), 200