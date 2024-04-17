
import { useOutletContext, Link } from "react-router-dom";

// import Player from "./Player";

function CoachesTable() {

    const { coaches } = useOutletContext();

    const coachComponents = coaches.map(coach => {
        return (
            // <div key={player.id}>
            //     <Player playerchar={player} />
            //     <Link to={`/players/${player.id}`}>Player Profile</Link>
            // </div>
            <tbody key={coach.id}>
                <tr key={coach.id}>
                    <td>{coach.name}</td>
                    <td>{coach.age}</td>
                    <td>{coach.country}</td>
                    <td>{coach.teams_coached}</td>
                    {/* <td>
                        <Link to={`/players/${player.id}`}>Player Profile</Link>
                    </td> */}
                </tr>
            </tbody>
        )
    })


    return (
        // <ul>
        //     {playersComponents}
        //     {/* <Link to={`/players/${player.id}`}>Player Profile</Link> */}
        // </ul>
        <div>
            <br />
            <h1>Greatest Coaches of All Time</h1>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Ethnicity</th>
                        <th>Teams Coached</th>
                        {/* <th>Profile</th> */}
                    </tr>
                </thead>

                {coachComponents}
            </table >
        </div>
    )
};

export default CoachesTable;