
import { useState, useEffect } from "react";
import { useParams, useOutletContext, useNavigate } from 'react-router-dom';



function PlayerProfile() {

    const [player, setPlayer] = useState(null);
    const [displayForm, setDisplayForm] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        jersey_number: "",
        points: ""
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
                            points: playerData.points
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
                <div>
                    <h1>{player.name}</h1>
                    <h4>{player.jersey_number}</h4>
                    {!displayForm ?
                        <div className="button-div">
                            <button onClick={toggleDisplayForm} className="update-button">Update Player</button>
                            <button onClick={handleDeleteButtonClick} className="delete-button">Delete Player</button>
                        </div> :
                        <div>
                            <form onSubmit={handleSubmit} className="edit-hotel">
                                <input onChange={updateFormData} type="text" name="name" placeholder="Hotel name" value={formData.name} />
                                <input onChange={updateFormData} type="number" name="jersey_number" placeholder="Jersey number" value={formData.jersey_number} />
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