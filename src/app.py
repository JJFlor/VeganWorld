"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import os
from flask import Flask, request, jsonify, url_for, send_from_directory
from flask_migrate import Migrate
from flask_swagger import swagger
from api.utils import APIException, generate_sitemap
from api.models import db
from api.routes import api
from api.admin import setup_admin
from api.commands import setup_commands
from flask_mail import Mail, Message
from api.mail.mail_config import mail
from flask_jwt_extended import JWTManager

import cloudinary
import cloudinary.uploader
from flask_jwt_extended import JWTManager



# from models import Person 

cloudinary.config(
    cloud_name='dulhrrkqi',
    api_key='693798853349662',
    api_secret='V29RBE-p9uctgcYKayG9shY6h-o'
)

ENV = "development" if os.getenv("FLASK_DEBUG") == "1" else "production"
static_file_dir = os.path.join(os.path.dirname(
    os.path.realpath(__file__)), '../public/')
app = Flask(__name__)
mail = Mail(app)
app.url_map.strict_slashes = False
#---------------------------------------------------------------------------------------------
app.config["JWT_SECRET_KEY"] = os.getenv("JWT_SECRET") 
jwt = JWTManager(app)


#---------------------------------------------------------------------------------------------
app.config['MAIL_SERVER']= 'smtp.gmail.com'
app.config['MAIL_PORT'] = 465
app.config['MAIL_USERNAME'] = os.getenv("EMAIL_USERNAME")
app.config['MAIL_PASSWORD'] = os.getenv("EMAIL_PASSWORD")
app.config['MAIL_USE_SSL'] = True
app.config['MAIL_DEFAULT_SENDER'] = ('rflq vwft wrjn klra', 'projectveganworld@gmail.com')

mail.init_app(app)  # Inicializa mail con la aplicación

@app.route('/api/mail/<address>', methods=['POST', 'GET'])
def send_email(address):
    try:
   
        msg = Message("Email prueba", #asunto del correo
                      recipients=[address]) 

        # Definir cuerpo del correo
        msg.body = "Hola, este es un correo de prueba enviado desde Flask."
        msg.html = "<p>Hola, este es un <b>correo de prueba</b> enviado desde Flask.</p>"

        # Enviar el correo
        mail.send(msg)

        return "Correo enviado exitosamente!"
    except Exception as e:
        return f"Error al enviar el correo: {str(e)}"

#---------------------------------------------------------------------------------------------


# database configuration
db_url = os.getenv("DATABASE_URL")
if db_url is not None:
    app.config['SQLALCHEMY_DATABASE_URI'] = db_url.replace(
        "postgres://", "postgresql://")
else:
    app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:////tmp/test.db"

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
MIGRATE = Migrate(app, db, compare_type=True)
db.init_app(app)

# add the admin
setup_admin(app)

# add the admin
setup_commands(app)

# Add all endpoints form the API with a "api" prefix
app.register_blueprint(api, url_prefix='/api')

# Handle/serialize errors like a JSON object


@app.errorhandler(APIException)
def handle_invalid_usage(error):
    return jsonify(error.to_dict()), error.status_code

# generate sitemap with all your endpoints


@app.route('/')
def sitemap():
    if ENV == "development":
        return generate_sitemap(app)
    return send_from_directory(static_file_dir, 'index.html')

# any other endpoint will try to serve it like a static file




# this only runs if `$ python src/main.py` is executed
if __name__ == '__main__':
    PORT = int(os.environ.get('PORT', 3001))
    app.run(host='0.0.0.0', port=PORT, debug=True)
