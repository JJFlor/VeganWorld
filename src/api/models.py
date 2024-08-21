from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), unique=False, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    partner_id = db.Column(db.Integer, db.ForeignKey("partner.id"))

    # relacion corregida
    partner = db.relationship("Partner", back_populates="users")

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "email": self.email,
            #esta es otra forma de serializar las relaciones
            "partner": self.partner.serialize() if self.partner else None
            # do not serialize the password, its a security breach
        }
    
class Product(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    product_name = db.Column(db.String(120), unique=True, nullable=False)
    price = db.Column(db.Integer, nullable=False)
    description = db.Column(db.String(120), nullable=False)
    image_url = db.Column(db.String(255), nullable=True)  # Campo opcional para la URL de la imagen

    def __repr__(self):
        return f'<Product {self.product_name}>'

    def serialize(self):
        return {
            "id": self.id,
            "product_name": self.product_name,
            "price": self.price,
            "description": self.description,
            "image_url": self.image_url  # Incluir la URL de la imagen en la serialización
        }
