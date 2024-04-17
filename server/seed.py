#!/usr/bin/env python3

# Standard library imports
from random import randint, choice as rc

# Remote library imports
from faker import Faker

# Local imports
from app import app
from models import db, Player, Team, player_teams, Coach

if __name__ == '__main__':
    fake = Faker()
    with app.app_context():

        # Deleting from the tables first
        db.session.query(player_teams).delete()
        db.session.commit()
        Player.query.delete()
        Team.query.delete()


        print("Starting seed...")

        lebron_james = Player(name='Lebron James', jersey_number=8, points=40000, assits=9000, rebounds=20000, games_played=3000, fg_3p=467, percentage_2p=47, percentage_3p=32, coach_id=1)
        steph_curry = Player(name='Steph Curry', jersey_number=33, points=34000, assits=15000, rebounds=8000, games_played=2400, fg_3p=4467, percentage_2p=54, percentage_3p=39, coach_id=1)
        javelle_mcgee = Player(name='Javelle McGee', jersey_number=9, points=4000, assits=1000, rebounds=12000, games_played=900, fg_3p=467, percentage_2p=51, percentage_3p=9)
    
        # _____Another option to add multiple at once_____
        # players = []
        # players.append(Player(name='Steph Curry', jersey_number=33, points=34000, assits=15000, rebounds=8000, games_played=2400, fg_3p=4467, percentage_2p=54, percentage_3p=39))
        # db.session.add_all(players)

        Los_Angeles_Lakers = Team(name='Los Angeles Lakers', city='Los Angeles Lakers', mascot='Lakers', championships=17, seasons=76, logo='https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Los_Angeles_Lakers_logo.svg/220px-Los_Angeles_Lakers_logo.svg.png')
        New_York_Knicks = Team(name='New York Knicks', city='New York', mascot='Knicks', championships=2, seasons=78, logo='https://upload.wikimedia.org/wikipedia/en/thumb/2/25/New_York_Knicks_logo.svg/800px-New_York_Knicks_logo.svg.png')
        Chicago_Bulls = Team(name='Chicago Bulls', city='Chicago', mascot='Bulls', championships=6, seasons=58, logo='https://upload.wikimedia.org/wikipedia/en/thumb/6/67/Chicago_Bulls_logo.svg/1200px-Chicago_Bulls_logo.svg.png')


        # Adding Coaches:
        Darvin_Ham = Coach(name='Darvin Ham', age=50, country='USA',teams_coached=1)
        Phil_Jackson = Coach(name='Phil Jackson', age=78, country='USA',teams_coached=2)
        Greg_Popovich = Coach(name='Gregg Popovich', age=75, country='USA',teams_coached=2)





        db.session.add_all([lebron_james, steph_curry, javelle_mcgee])
        db.session.add_all([Los_Angeles_Lakers, New_York_Knicks, Chicago_Bulls])
        db.session.add_all([Darvin_Ham, Phil_Jackson, Greg_Popovich])
        db.session.commit()


        # Seeding the Many to Many
        Los_Angeles_Lakers.players.append(lebron_james)
        Los_Angeles_Lakers.players.append(javelle_mcgee)
        Chicago_Bulls.players.append(steph_curry)
        Chicago_Bulls.players.append(lebron_james)

        # lebron_james.teams.append(Los_Angeles_Lakers)
        # javelle_mcgee.teams.append(Los_Angeles_Lakers)
        # steph_curry.teams.append(Chicago_Bulls)

        db.session.commit()

        print("Completed seeding")
