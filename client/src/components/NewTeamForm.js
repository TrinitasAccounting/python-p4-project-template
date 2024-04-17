

import { useState } from 'react';
import { useOutletContext, useNavigate } from 'react-router-dom';



function NewTeamForm() {

    const [formData, setFormData] = useState({
        name: "",
        city: "",
        mascot: "",
        championships: undefined,
        seasons: undefined,
        logo: ""
    })

    // This addPlayer is passed from the app.js file
    const { addTeam } = useOutletContext();
    const navigate = useNavigate();

    function updateFormData(event) {
        setFormData({ ...formData, [event.target.name]: event.target.value })
    };

    function handleSubmit(event) {
        event.preventDefault()
        addTeam(formData)
        navigate('/teams')


    };


    return (
        <form onSubmit={handleSubmit}>
            <input onChange={updateFormData} type='text' name='name' placeholder='Team Name' value={formData.name} />
            <input onChange={updateFormData} type='text' name='city' placeholder='City' value={formData.city} />
            <input onChange={updateFormData} type='text' name='mascot' placeholder='Mascot' value={formData.mascot} />
            <input onChange={updateFormData} type='number' name='chamionships' placeholder='# of Championships' value={formData.championships} />
            <input onChange={updateFormData} type='number' name='seasons' placeholder='# of Seasons Played' value={formData.seasons} />
            <input onChange={updateFormData} type='text' name='logo' placeholder='Team Logo' value={formData.logo} />
            <input type='submit' value="add new team" />
        </form>
    )
};

export default NewTeamForm;