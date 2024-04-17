

import { useState } from 'react';
import { useOutletContext, useNavigate } from 'react-router-dom';



function NewTeamForm() {

    const [formData, setFormData] = useState({
        name: "",
        city: "",
        mascot: "",
        championships: '0',
        seasons: '0',
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
        <div>
            <br />
            <h1>Add a New Team</h1>
            <form onSubmit={handleSubmit}>
                <label>Team Name
                    <input onChange={updateFormData} type='text' name='name' placeholder='Team Name' value={formData.name} />
                </label><br />
                <br /><label>City
                    <input onChange={updateFormData} type='text' name='city' placeholder='City' value={formData.city} />
                </label><br />
                <br /><label>Team Mascot
                    <input onChange={updateFormData} type='text' name='mascot' placeholder='Mascot' value={formData.mascot} />
                </label><br />
                <br /><label># of Championships
                    <input onChange={updateFormData} type='number' name='championships' placeholder='# of Championships' value={formData.championships} />
                </label><br />
                <br /><label># of Seasons
                    <input onChange={updateFormData} type='number' name='seasons' placeholder='# of Seasons Played' value={formData.seasons} />
                </label><br />
                <br /><label>Team Logo
                    <input onChange={updateFormData} type='text' name='logo' placeholder='Team Logo' value={formData.logo} />
                </label><br />
                <br /><input type='submit' value="add new team" />
            </form>
        </div>
    )
};

export default NewTeamForm;