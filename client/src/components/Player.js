

function Player({ playerchar }) {

    return (
        <li>{playerchar.name}   |   {playerchar.jersey_number}   |   {playerchar.points}</li>
    )
};

export default Player;