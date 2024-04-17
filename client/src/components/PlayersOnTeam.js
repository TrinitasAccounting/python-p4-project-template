import { useEffect, useState } from "react";
import { useParams, useOutletContext, useNavigate, Link } from 'react-router-dom';


function PlayersOnTeam() {

    // This is finding the id that is in the URL and taking it out and using it as a prop. The Link to on the other page is what is actually passing this id in and this just destructures it as a parameter for the fetch request to use
    const { id } = useParams();

    const [teamPlayers, setTeamPlayers] = useState([]);

    useEffect(() => {
        fetch(`/teams/players/${id}`)
            .then(response => {
                if (response.ok) {
                    response.json().then(playerData => {
                        setTeamPlayers(playerData)
                        // setFormData({
                        //     name: playerData.name,
                        //     jersey_number: playerData.jersey_number,
                        //     points: playerData.points
                        // })
                    })
                }
                else if (response.status == 404) {
                    response.json().then(errorData => alert(`Error: ${errorData.error}`))
                }
                else {
                    response.json().then(() => alert("Error: Something went wrong"))
                }
            })
    }, []);



    // console.log(teamPlayers['players']);


    // const ListOfPlayers = []
    let teamPlayersList = []

    // if (teamPlayers.length !== 0) {
    //     teamPlayers['players'].map(player => {
    //         teamPlayersList.push(player['name'])
    //     })
    // }



    // if (teamPlayers.length !== 0) {
    //     teamPlayersList = teamPlayers['players'].map(player => {
    //         return (
    //             <li>
    //                 {player.name} |
    //                 | {player.points}
    //             </li>
    //         )
    //     })
    // }



    // const testTeamPlayers = teamPlayers['players'].map(player => {
    //     return (
    //         <div>
    //             <li>
    //                 {player.name}
    //             </li>
    //         </div>
    //     )
    // })






    // const playersList = teamPlayersList.map(player => {
    //     // <li>{player}</li>
    //     return (
    //         <div>
    //             <li>
    //                 {player}
    //             </li>
    //         </div>
    //     )
    // })

    // console.log(playersList)

    return (
        <div>
            <h2>All Players</h2>
            {teamPlayers.length !== 0 ?
                teamPlayers['players'].map(player => {
                    return (
                        <div key={player.id}>
                            <li>
                                {player.name} |
                                <Link to={`/players/${player.id}`}>Player Profile</Link>
                            </li>
                        </div>
                    )
                })
                :
                <h4>"This team has no historic players"</h4>
            }

        </div>
    )
}
// };


export default PlayersOnTeam;