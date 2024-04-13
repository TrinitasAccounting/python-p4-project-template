#!/usr/bin/env python3

# Standard library imports

# Remote library imports
from flask import request, make_response
from flask_restful import Resource

# Local imports
from config import app, db, api
# Add your model imports
# need this import before the migration will work___________________________________________
from models import Player

# Views go here!

@app.route('/')
def index():
    return '<h1>Projectsssss Server</h1>'


class AllPlayers(Resource):

    def get(self):

        players = Player.query.all()

        response_body = [player.to_dict() for player in players]
        return make_response(response_body, 200)


api.add_resource(AllPlayers, '/players')



if __name__ == '__main__':
    app.run(port=5555, debug=True)

