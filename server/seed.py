#!/usr/bin/env python3

# Standard library imports
from random import randint, choice as rc

# Remote library imports
from faker import Faker

# Local imports
from app import app
from models import db, Player, Team

if __name__ == '__main__':
    fake = Faker()
    with app.app_context():

        # Deleting from the tables first
        Player.query.delete()
        Team.query.delete()


        print("Starting seed...")

        lebron_james = Player(name='Lebron James', jersey_number=8, points=40000, assits=9000, rebounds=20000, games_played=3000, fg_3p=467, percentage_2p=47, percentage_3p=32, team_id=1)
        steph_curry = Player(name='Steph Curry', jersey_number=33, points=34000, assits=15000, rebounds=8000, games_played=2400, fg_3p=4467, percentage_2p=54, percentage_3p=39, team_id=2)
    
        # _____Another option to add multiple at once_____
        # players = []
        # players.append(Player(name='Steph Curry', jersey_number=33, points=34000, assits=15000, rebounds=8000, games_played=2400, fg_3p=4467, percentage_2p=54, percentage_3p=39))
        # db.session.add_all(players)

        Los_Angeles_Lakers = Team(name='Los Angeles Lakers', city='Los Angeles Lakers', mascot='Lakers', championships=17, seasons=76, logo='https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Los_Angeles_Lakers_logo.svg/220px-Los_Angeles_Lakers_logo.svg.png')
        New_York_Knicks = Team(name='New York Knicks', city='New York', mascot='Knicks', championships=2, seasons=78, logo='https://upload.wikimedia.org/wikipedia/en/thumb/2/25/New_York_Knicks_logo.svg/800px-New_York_Knicks_logo.svg.png')
        Chicago_Bulls = Team(name='Chicago Bulls', city='Chicago', mascot='Bulls', championships=6, seasons=58, logo='https://upload.wikimedia.org/wikipedia/en/thumb/6/67/Chicago_Bulls_logo.svg/1200px-Chicago_Bulls_logo.svg.png')




        db.session.add_all([lebron_james, steph_curry])
        db.session.add_all([Los_Angeles_Lakers, New_York_Knicks, Chicago_Bulls])
        db.session.commit()


        print("Completed seeding")
