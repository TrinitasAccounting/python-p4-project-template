from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.associationproxy import association_proxy
from sqlalchemy.orm import validates

from config import db

# Models go here!

class Player(db.Model, SerializerMixin):
    __tablename__ = 'players'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    jersey_number = db.Column(db.Integer)
    points = db.Column(db.Integer)
    assits = db.Column(db.Integer)
    rebounds = db.Column(db.Integer)
    games_played = db.Column(db.Integer)
    fg_3p = db.Column(db.Integer)
    percentage_2p = db.Column(db.Integer)
    percentage_3p = db.Column(db.Integer)


    team_id = db.Column(db.Integer, db.ForeignKey('teams.id'))


    @validates('name')
    def validate_name(self, attr, value):
        if (not isinstance(value, str)) or (len(value) == 0):
            raise ValueError(f'{attr} must have a name')
        else:
            return value
        

class Teams(db.Model, SerializerMixin):
    __tablename__ = 'teams'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    city = db.Column(db.String)
    mascot = db.Column(db.String)
    championships = db.Column(db.Integer)
    seasons = db.Column(db.Integer)
    logo = db.Column(db.String)

    

