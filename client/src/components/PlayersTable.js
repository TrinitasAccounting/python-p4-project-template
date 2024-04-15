

import { useOutletContext, Link } from "react-router-dom";

import Player from "./Player";

function PlayersTable() {

    const { players } = useOutletContext();

    const playersComponents = players.map(player => {
        return (
            <div>
                <Player key={player.id} playerchar={player} />
                <Link to={`/players/${player.id}`}>Player Profile</Link>
            </div>
        )
    })


    return (
        <ul>
            {playersComponents}
            {/* <Link to={`/players/${player.id}`}>Player Profile</Link> */}
        </ul>
    )
};

export default PlayersTable;