#!/usr/bin/env python3

# Standard library imports
from random import randint, choice as rc

# Remote library imports
from faker import Faker

# Local imports
from app import app
from models import db, Player

if __name__ == '__main__':
    fake = Faker()
    with app.app_context():

        # Deleting from the tables first
        Player.query.delete()


        print("Starting seed...")

        lebron_james = Player(name='Lebron James', jersey_number=8, points=40000, assits=9000, rebounds=20000, games_played=3000, fg_3p=467, percentage_2p=47, percentage_3p=32)
        steph_curry = Player(name='Steph Curry', jersey_number=33, points=34000, assits=15000, rebounds=8000, games_played=2400, fg_3p=4467, percentage_2p=54, percentage_3p=39)
        


        # _____Another option to add multiple at once_____
        # players = []
        # players.append(Player(name='Steph Curry', jersey_number=33, points=34000, assits=15000, rebounds=8000, games_played=2400, fg_3p=4467, percentage_2p=54, percentage_3p=39))
        # db.session.add_all(players)


        db.session.add_all([lebron_james, steph_curry])
        db.session.commit()


        print("Completed seeding")
