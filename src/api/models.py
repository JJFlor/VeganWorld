from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(20), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    partner = db.Column(db.Boolean(), unique= False, nullable=False)
    partner_id = db.Column(db.Integer, db.ForeignKey("partner.id"))
    

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "email": self.email,
            "partner": [partner.serialize() for partner in self.partner]
            # do not serialize the password, its a security breach
        }


class Partner(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(20), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(120), unique=False, nullable=False)
    user_fk = db.Column(db.Integer, db.ForeignKey("user"))
    premium = db.Column(db.Boolean(), unique= False, nullable = False)
    partner_id = db.relationship("user", backref="partner.id")
    
    
    def __repr__(self):
        return f'<Partner {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "email": self.email,
            "premium":[premium.serialize() for premium in self.premium]
        }
    

class Shop(db.Model):
    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String(20), unique = False, nullable = False)
    email = db.Column(db.String(120), unique = True, nullable = False)
    address = db.Column(db.String(120), unique = False, nullable = False)
    phone = db.Column(db.Integer, unique = True, nullable = False)
    cathegory = db.Column(db.String(120), unique = False, nullable = False)
    inventory = db.Column(db.Integer, unique = True, nullable = False)
    id_partner = db.Column(db.Integer, db.ForeignKey("partner.id"))

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
    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String(20), unique = False, nullable = False)
    description = db.Column(db.String(20), unique = False, nullable = False)
    price = db.Column(db.Integer, unique = False, nullable = False)
    shop_id = db.Column(db.Integer, db.ForeignKey("shop.id"))
    inventory = db.relationship("inventory", backref="shop")

    def __repr__(self):
        return f'<Inventory {self.name}>'

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "description": self.description,
            "price": self.price,
            "shop_id": self.shop_id
        }

class Favorite(db.Model):
    id = db.Column(db.Integer, primary_key = True)
    partner_id = db.Column(db.Integer, db.ForeignKey("partner.id"))
    user_id = db.Column(db.Integer, db.ForeignKey("user.id"))
    
    
    def __repr__(self):
        return f'<Favorites {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
        }

