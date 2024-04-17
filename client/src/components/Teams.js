import { useOutletContext, Link } from "react-router-dom";
import PlayersOnTeam from "./PlayersOnTeam";

import './Team.css';


function Teams() {

    const { teams } = useOutletContext()

    // console.log(teams[0].names);

    // const players = teams.map(team => {
    //     return (
    //         console.log(team.players)
    //     )
    // })

    const teamsList = teams.map(team => {
        // let playersList = [];
        // team.players.map(player => {
        //     playersList.push(player)
        // })

        // console.log(playersList)

        return (
            <div key={team.id}>
                <li>
                    <img src={team.logo} alt={team.name} className='team-logo' /> |
                    | {team.name} |
                    | {team.mascot}
                    {/* {team.players[1]} */}
                    {/* {playersList} */}

                    <button>Click Me</button>
                </li>
                <Link to={`/teams/players/${team.id}`}>
                    <button type='button' >Players on Team</button>
                </Link>
                {/* <PlayersOnTeam /> */}
            </div>

        )
    })

    return (
        <ul>
            {teamsList}
        </ul>
    )
}

export default Teams;
