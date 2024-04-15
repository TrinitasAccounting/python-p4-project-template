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

# api.add_resource(AllPlayers, '/players')

    def post(self):
        try:
            new_player = Player(name=request.json.get('name'), jersey_number=request.json.get('jersey_number'), points=request.json.get('points'), assits=request.json.get('assits'), rebounds=request.json.get('rebounds'), games_played=request.json.get('games_played'), fg_3p=request.json.get('fg_3p'), percentage_2p=request.json.get('percentage_2p'), percentage_3p=request.json.get('percentage_3p'))
            db.session.add(new_player)
            db.session.commit()

            response_body = new_player.to_dict()
            return make_response(response_body, 201)
        except:
            response_body = {
                'error': 'Player must have a name and a team they played for'
            }
            return make_response(response_body, 400)


api.add_resource(AllPlayers, '/players')



class PlayerByID(Resource):

    def get(self, id):
        player = Player.query.filter(Player.id == id).first()

        if player:
            response_body = player.to_dict()

            return make_response(response_body, 200)


    def patch(self, id):
        player = Player.query.filter(Player.id == id).first()

        if player:
            try:
                for attr in request.json:
                    setattr(player, attr, request.json[attr])

                db.session.commit()
                response_body = player.to_dict()
                return make_response(response_body, 200)

            except:
                response_body = {
                    "error": "Player must have a name and a jersey number."
                }
                return make_response(response_body,400)

        else:
            response_body = {
                "error" : "Player Not Found"
            }
            return make_response(response_body, 404)


    def delete(self,id):
        player = Player.query.filter(Player.id == id).first()

        if player:
            db.session.delete(player)
            db.session.commit()
            response_body = {}
            return make_response(response_body, 204)

        else:
            response_body = {
                'error': "Player Not Found"
            }



api.add_resource(PlayerByID, '/players/<int:id>')



if __name__ == '__main__':
    app.run(port=5555, debug=True)

