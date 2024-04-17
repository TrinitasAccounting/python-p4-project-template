
import { useState } from 'react';
import { useOutletContext, useNavigate } from 'react-router-dom';



function NewPlayerForm() {

    const [formData, setFormData] = useState({
        name: "",
        jersey_number: ""
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
        <form onSubmit={handleSubmit}>
            <input onChange={updateFormData} type='text' name='name' placeholder='Player Name' value={formData.name} />
            <input onChange={updateFormData} type='text' name='jersey_number' placeholder='Jersey Number' value={formData.jersey_number} />
            <input type='submit' value="add new player" />
        </form>
    )
};

export default NewPlayerForm;