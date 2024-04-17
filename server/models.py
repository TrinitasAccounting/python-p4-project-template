from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.associationproxy import association_proxy
from sqlalchemy.orm import validates


from config import db, metadata

# Models go here!

player_teams = db.Table(
    'players_teams',
    metadata,
    db.Column('player_id', db.Integer, db.ForeignKey(
        'players.id'), primary_key=True),
    db.Column('team_id', db.Integer, db.ForeignKey(
        'teams.id'), primary_key=True)
)




class Player(db.Model, SerializerMixin):
    __tablename__ = 'players'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    jersey_number = db.Column(db.Integer)
    points = db.Column(db.Integer)
    assits = db.Column(db.Integer)
    rebounds = db.Column(db.Integer)
    games_played = db.Column(db.Integer)
    fg_3p = db.Column(db.Integer)
    percentage_2p = db.Column(db.Integer)
    percentage_3p = db.Column(db.Integer)


    coach_id = db.Column(db.Integer, db.ForeignKey('coaches.id'))
    coach = db.relationship('Coach', back_populates='players')

    # team_id = db.Column(db.Integer, db.ForeignKey('teams.id'))

    # team = db.relationship('Team', back_populates='players')

    # serialize_rules = ('-team.players',)

    # Many to Many Relationship
    teams = db.relationship('Team', secondary=player_teams, back_populates='players')
    serialize_rules = ('-teams.players','-coach.players')


    @validates('name')
    def validate_name(self, attr, value):
        if (not isinstance(value, str)) or (len(value) == 0):
            raise ValueError(f'{attr} must have a name')
        else:
            return value

    # @validates('team_id')
    # def validate_team_id(self, attr, value):
    #     if (not isinstance(value, Team)):
    #         raise ValueError(f'{attr} must be an instance of the Team class')
    #     else:
    #         return value

        

class Team(db.Model, SerializerMixin):
    __tablename__ = 'teams'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    city = db.Column(db.String)
    mascot = db.Column(db.String)
    championships = db.Column(db.Integer)
    seasons = db.Column(db.Integer)
    logo = db.Column(db.String)


    # players = db.relationship('Player', back_populates='team', cascade='all')

    # serialize_rules = ('-players.team',)



    # Many to Many Relationship
    players = db.relationship('Player', secondary=player_teams, back_populates='teams')
    serialize_rules = ('-players.teams',)



    __table_args__ = (db.CheckConstraint('seasons >= 0'),)



class Coach(db.Model, SerializerMixin):
    __tablename__ = 'coaches'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    age = db.Column(db.Integer)
    country = db.Column(db.String)
    teams_coached = db.Column(db.Integer)


    players = db.relationship('Player', back_populates='coach')
    serialize_rules = ('-players.coach',)

    



    

    

