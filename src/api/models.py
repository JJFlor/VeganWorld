from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(120), nullable=False)
    address = db.Column(db.String(350))
    phone = db.Column(db.String(20), unique=True)
    # image_url = db.Column(db.String(255))  # Campo opcional para la URL de la imagen
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
            "address": self.address,
            "phone": self.phone,
            # "image_url": self.image_url,
            #forma de serializar las relaciones
            "partner": self.partner.serialize() if self.partner else None
        }


class Partner(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(200), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    type_of_services = db.Column(db.String(120), unique=False, nullable=False)
    premium = db.Column(db.Boolean(), unique=False, nullable=False)
    address = db.Column(db.String(350), unique= False)
    phone = db.Column(db.Integer, unique=True, nullable=False)
    # image_url = db.Column(db.String(255))  # Campo opcional para la URL de la imagen
    about_us = db.Column(db.String(600), unique=False, nullable=False)

    # relacion corregida
    users = db.relationship("User", back_populates="partner")

    

    def __repr__(self):
        return f'<Partner {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "email": self.email,
            "type_of_services": self.type_of_services,
            "premium": self.premium,
            "address": self.address,
            "phone": self.phone,
            "about_us": self.about_us,
            # "image_url": self.image_url
        }
    

class Shop(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(200), nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    address = db.Column(db.String(200), nullable=False)
    phone = db.Column(db.Integer, unique=True, nullable=False)
    cathegory = db.Column(db.String(120), nullable=False)
    inventory = db.Column(db.Integer, unique=True, nullable=False)
    id_partner = db.Column(db.Integer, db.ForeignKey("partner.id"))

    # añadida relacion inversa 
    inventories = db.relationship("Inventory", back_populates="shop")

    def __repr__(self):
        return f'<Shop {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "email": self.email,
            "address": self.address,
            "phone": self.phone,
            "cathegory": self.cathegory,
            "inventory": self.inventory
        }

class Inventory(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    product_name = db.Column(db.String(120), nullable=False)
    description = db.Column(db.String(200), nullable=False)
    price = db.Column(db.Integer, nullable=False)
    image_url = db.Column(db.String(255))  # Campo opcional para la URL de la imagen
    shop_id = db.Column(db.Integer, db.ForeignKey("shop.id"))
    user_id = db.Column(db.Integer, nullable=False)

    # relacion corregida
    shop = db.relationship("Shop", back_populates="inventories")

    def __repr__(self):
        return f'<Inventory {self.product_name}>'

    def serialize(self):
        return {
            "id": self.id,
            "product_name": self.product_name,
            "description": self.description,
            "price": self.price,
            "image_url": self.image_url,
            "shop_id": self.shop_id,
            "user_id": self.user_id
        }


# class Favorite(db.Model):
#     id = db.Column(db.Integer, primary_key=True)
#     partner_id = db.Column(db.Integer, db.ForeignKey("partner.id"))
#     user_id = db.Column(db.Integer, db.ForeignKey("user.id"))

#     def __repr__(self):
#         return f'<Favorites {self.id}>'

#     def serialize(self):
#         return {
#             "id": self.id,
#         }