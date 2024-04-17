
import { useState } from 'react';
import { useOutletContext, useNavigate } from 'react-router-dom';



function NewPlayerForm() {

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
        coach_id: '0'
    })

    // This addPlayer is passed from the app.js file
    const { addPlayer } = useOutletContext();
    const navigate = useNavigate();

    function updateFormData(event) {
        setFormData({ ...formData, [event.target.name]: event.target.value })
    };

    function handleSubmit(event) {
        event.preventDefault()
        addPlayer(formData)
        navigate('/')


    };


    return (
        <>
            <br />
            <h1>Add a New Player</h1>
            <form onSubmit={handleSubmit}>
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
                {/* <input onChange={updateFormData} type='number' name='coach_id' placeholder='Coach Id (Optional)' value={formData.coach_id} /> */}
                <input type='submit' value="add new player" />
            </form>
        </>
    )
};

export default NewPlayerForm;