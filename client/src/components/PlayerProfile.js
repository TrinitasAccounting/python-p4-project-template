
import { useState, useEffect } from "react";
import { useParams, useOutletContext, useNavigate } from 'react-router-dom';



function PlayerProfile() {

    const [player, setPlayer] = useState(null);
    const [displayForm, setDisplayForm] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        jersey_number: "",
        points: '0',
        assits: '0',
        rebounds: '0',
        games_played: '0',
        fg_3p: '0',
        percentage_2p: '0',
        percentage_3p: '0',
        coach_id: ''
    })

    const { id } = useParams()

    const { deletePlayer, updatePlayer } = useOutletContext()
    const navigate = useNavigate()


    useEffect(() => {
        fetch(`/players/${id}`)
            .then(response => {
                if (response.ok) {
                    response.json().then(playerData => {
                        setPlayer(playerData)
                        setFormData({
                            name: playerData.name,
                            jersey_number: playerData.jersey_number,
                            points: playerData.points,
                            assits: playerData.assits,
                            rebounds: playerData.rebounds,
                            games_played: playerData.games_played,
                            fg_3p: playerData.fg_3p,
                            percentage_2p: playerData.percentage_2p,
                            percentage_3p: playerData.percentage_3p,
                        })
                    })
                }
                else if (response.status == 404) {
                    response.json().then(errorData => alert(`Error: ${errorData.error}`))
                }
                else {
                    response.json().then(() => alert("Error: Something went wrong"))
                }
            })
    }, [])


    function handleDeleteButtonClick() {
        deletePlayer(player.id)
        setPlayer(null)
        navigate('/')
    }

    function toggleDisplayForm() {
        setDisplayForm(displayForm => !displayForm)
    }

    function handleSubmit(event) {
        event.preventDefault()

        updatePlayer(player.id, formData, setPlayer)

        toggleDisplayForm()
    }


    function updateFormData(event) {
        setFormData({ ...formData, [event.target.name]: event.target.value })
    }






    return (
        <>
            {player ?
                <div><br />

                    <h1>{player.name}</h1>
                    {!displayForm ?
                        <div className="button-div">
                            <h4>Jersey Number: {player.jersey_number}</h4>
                            <h4>Points Scored: {player.points}</h4>
                            <h4># of Assists: {player.assits}</h4>
                            <h4># of Rebounds: {player.rebounds}</h4>
                            <h4># of Games Played: {player.games_played}</h4>
                            <h4>3 Pointers Made: {player.fg_3p}</h4>
                            <h4>2pt Shot Percentage: {player.percentage_2p}</h4>
                            <h4>3pt Shot Percentage: {player.percentage_3p}</h4>
                            <button onClick={toggleDisplayForm} className="update-button">Update Player</button>
                            <button onClick={handleDeleteButtonClick} className="delete-button">Delete Player</button>
                        </div> :
                        <div>
                            <form onSubmit={handleSubmit} className="edit-hotel">
                                {/* <input onChange={updateFormData} type="text" name="name" placeholder="Hotel name" value={formData.name} /> */}
                                {/* <input onChange={updateFormData} type="number" name="jersey_number" placeholder="Jersey number" value={formData.jersey_number} /> */}
                                <label>Name
                                    <input onChange={updateFormData} type='text' name='name' placeholder='Player Name' value={formData.name} />
                                </label><br /><br />
                                <label>Jersey Number
                                    <input onChange={updateFormData} type='number' name='jersey_number' placeholder='Jersey Number' value={formData.jersey_number} />
                                </label><br /><br />
                                <label>Points Scored
                                    <input onChange={updateFormData} type='number' name='points' placeholder='Points Scored' value={formData.points} />
                                </label><br /><br />
                                <label># of Assists
                                    <input onChange={updateFormData} type='number' name='assits' placeholder='# of Assits' value={formData.assits} />
                                </label><br /><br />
                                <label># of Rebounds
                                    <input onChange={updateFormData} type='number' name='rebounds' placeholder='# of Rebounds' value={formData.rebounds} />
                                </label><br /><br />
                                <label># of Games Played
                                    <input onChange={updateFormData} type='number' name='games_played' placeholder='# of Games Played' value={formData.games_played} />
                                </label><br /><br />
                                <label>3 Pointers Made
                                    <input onChange={updateFormData} type='number' name='fg_3p' placeholder='3 Pointers Made' value={formData.fg_3p} />
                                </label><br /><br />
                                <label>2pt Shot Percentage
                                    <input onChange={updateFormData} type='number' name='percentage_2p' placeholder='2pt Percentage' value={formData.percentage_2p} />
                                </label><br /><br />
                                <label>3pt Shot Percentage
                                    <input onChange={updateFormData} type='number' name='percentage_3p' placeholder='3pt Percentage' value={formData.percentage_3p} />
                                </label><br /><br />
                                <button type="submit">Save Changes</button>
                            </form>
                        </div>}
                </div> :
                null
            }
        </>
    )
}

export default PlayerProfile;