

import { useOutletContext, Link } from "react-router-dom";

import Player from "./Player";

function PlayersTable() {

    const { players } = useOutletContext();

    const playersComponents = players.map(player => {
        return (
            // <div key={player.id}>
            //     <Player playerchar={player} />
            //     <Link to={`/players/${player.id}`}>Player Profile</Link>
            // </div>
            <tbody key={player.id}>
                <tr key={player.id}>
                    <td>{player.name}</td>
                    <td>{player.jersey_number}</td>
                    <td>{player.points}</td>
                    <td>{player.games_played}</td>
                    <td>
                        <Link to={`/players/${player.id}`}>Player Profile</Link>
                    </td>
                </tr>
            </tbody>
        )
    })


    return (
        // <ul>
        //     {playersComponents}
        //     {/* <Link to={`/players/${player.id}`}>Player Profile</Link> */}
        // </ul>

        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Jersey Number</th>
                    <th>Points Scored</th>
                    <th># of Games Played</th>
                    <th>Profile</th>
                </tr>
            </thead>

            {playersComponents}
        </table >
    )
};

export default PlayersTable;