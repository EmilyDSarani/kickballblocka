import React, { useState } from 'react'
import { useHistory } from 'react-router';
import { deleteTeamById, updateTeamById } from '../../services/teams';

export default function TeamEdit() {   
const [name, setName] = useState('');
const [city, setCity] = useState('');
const[state,setState] = useState('');
const history = useHistory();

const [loading, setLoading] = useState(true);

//I want to go from display to edit
//Switch State- like a light switch-when the user flips a switch form display to edit
//edit ? <Edit> : <Display>
//based on button true or false

// const handleDelete = async ({ id, name }) => {
//     const deleteTeam = confirm(`You are attempting to delete ${name}, did you mean to do this?`);
//     if(deleteTeam) { 
//         await deleteTeamById(id)
//         await teamLoad();
// }
// };

const handleUpdate = async({ id }) => {
    const updateTeam = confirm(`Would you like to update ${name}?`);
    if (updateTeam){
        updateTeamById(id)
        await teamLoad();
    }
};


return (
    <>
    <fieldset>
        <legend>Register Your Team!</legend>
        <form>
            <label htmlFor='name'>Name:</label>   
            <input 
            id='name' 
            name='name' 
            type='text' 
            value={name}
            onChange={({ target }) => setName(target.value)} 
            />

            <label htmlFor='city'>City:</label>   
            <input
            id='city' 
            name='city' 
            type='text'
            alue={city}
            onChange={({ target }) => setCity(target.value)}  />

            <label htmlFor='state'>State:</label>   
            <input 
            id='state' 
            name='state' 
            type='text'
            value={state}
            onChange={({ target }) => setState(target.value)}  />

            {/* <button type="button" onClick={() => handleDelete({ id: team.id, name: team.name})}>Delete</button> */}
            <button type="button" onClick={()=> handleUpdate({id: team.id, name: team.name})}>Update</button>
        </form>
    </fieldset>
    </>
)
}
