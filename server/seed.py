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
        Coach.query.delete()


        print("Starting seed...")

        lebron_james = Player(name='Lebron James', jersey_number=8, points=40000, assits=9000, rebounds=20000, games_played=3000, fg_3p=467, percentage_2p=47, percentage_3p=32, coach_id=1)
        steph_curry = Player(name='Steph Curry', jersey_number=33, points=34000, assits=15000, rebounds=8000, games_played=2400, fg_3p=4467, percentage_2p=54, percentage_3p=39, coach_id=1)
        javelle_mcgee = Player(name='Javelle McGee', jersey_number=9, points=4000, assits=1000, rebounds=12000, games_played=900, fg_3p=467, percentage_2p=51, percentage_3p=9)
        michael_jordan = Player(name='Michael Jordan', jersey_number=23, points=29000, assits=10000, rebounds=4000, games_played=1900, fg_3p=1267, percentage_2p=49.5, percentage_3p=32, coach_id=2)
        shaq_oneal = Player(name="Shaquille O'Neal", jersey_number=32, points=36000, assits=1000, rebounds=28000, games_played=2950, fg_3p=7, percentage_2p=58, percentage_3p=10, coach_id=2)
        kobe_bryant = Player(name='Kobe Bryant', jersey_number=24, points=35000, assits=11000, rebounds=14000, games_played=2700, fg_3p=1467, percentage_2p=48, percentage_3p=31, coach_id=2)
        larry_bird = Player(name='Larry Bird', jersey_number=33, points=31000, assits=19000, rebounds=17400, games_played=2000, fg_3p=2307, percentage_2p=47, percentage_3p=35)
        tim_duncan = Player(name='Tim Duncan', jersey_number=28, points=32500, assits=9000, rebounds=19500, games_played=2300, fg_3p=435, percentage_2p=54, percentage_3p=14, coach_id=3)
    
        # _____Another option to add multiple at once_____
        # players = []
        # players.append(Player(name='Steph Curry', jersey_number=33, points=34000, assits=15000, rebounds=8000, games_played=2400, fg_3p=4467, percentage_2p=54, percentage_3p=39))
        # db.session.add_all(players)

        Los_Angeles_Lakers = Team(name='Los Angeles Lakers', city='Los Angeles Lakers', mascot='Lakers', championships=17, seasons=76, logo='https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Los_Angeles_Lakers_logo.svg/220px-Los_Angeles_Lakers_logo.svg.png')
        New_York_Knicks = Team(name='New York Knicks', city='New York', mascot='Knicks', championships=2, seasons=78, logo='https://upload.wikimedia.org/wikipedia/en/thumb/2/25/New_York_Knicks_logo.svg/800px-New_York_Knicks_logo.svg.png')
        Chicago_Bulls = Team(name='Chicago Bulls', city='Chicago', mascot='Bulls', championships=6, seasons=58, logo='https://upload.wikimedia.org/wikipedia/en/thumb/6/67/Chicago_Bulls_logo.svg/1200px-Chicago_Bulls_logo.svg.png')
        Dallas_Mavericks = Team(name='Dallas Mavericks', city='Dallas', mascot='Mavericks', championships=1, seasons=44, logo='https://upload.wikimedia.org/wikipedia/en/thumb/9/97/Dallas_Mavericks_logo.svg/1200px-Dallas_Mavericks_logo.svg.png')
        Brooklyn_Nets = Team(name='Brooklyn Nets', city='Brooklyn', mascot='Nets', championships=0, seasons=12, logo='https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Brooklyn_Nets_newlogo.svg/1200px-Brooklyn_Nets_newlogo.svg.png')
        Golden_State = Team(name='Golden State Warriors', city='Golden State', mascot='Warriors', championships=4, seasons=21, logo='https://logowik.com/content/uploads/images/605_golden_state.jpg')

        # Adding Coaches:
        Darvin_Ham = Coach(name='Darvin Ham', age=50, country='USA',teams_coached=1)
        Phil_Jackson = Coach(name='Phil Jackson', age=78, country='USA',teams_coached=2)
        Greg_Popovich = Coach(name='Gregg Popovich', age=75, country='USA',teams_coached=2)





        db.session.add_all([lebron_james, steph_curry, javelle_mcgee, michael_jordan, shaq_oneal,kobe_bryant, larry_bird,tim_duncan])
        db.session.add_all([Los_Angeles_Lakers, New_York_Knicks, Chicago_Bulls, Dallas_Mavericks, Brooklyn_Nets, Golden_State])
        db.session.add_all([Darvin_Ham, Phil_Jackson, Greg_Popovich])
        db.session.commit()


        # Seeding the Many to Many
        Los_Angeles_Lakers.players.append(lebron_james)
        Los_Angeles_Lakers.players.append(javelle_mcgee)
        Los_Angeles_Lakers.players.append(shaq_oneal)
        Los_Angeles_Lakers.players.append(kobe_bryant)
        Chicago_Bulls.players.append(steph_curry)
        Chicago_Bulls.players.append(lebron_james)

        # lebron_james.teams.append(Los_Angeles_Lakers)
        # javelle_mcgee.teams.append(Los_Angeles_Lakers)
        # steph_curry.teams.append(Chicago_Bulls)

        db.session.commit()

        print("Completed seeding")
