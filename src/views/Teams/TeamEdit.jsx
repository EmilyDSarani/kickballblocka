import { useState, useEffect } from 'react'
import { useHistory } from 'react-router';
import { deleteTeamById, updateTeamById, getTeamById } from '../../services/teams';

export default function TeamEdit({ match }) {   
const [name, setName] = useState('');
const [city, setCity] = useState('');
const[state,setState] = useState('');
const history = useHistory();
const { id } = match.params;
// const [team, setTeam] = useState(null);
const [loading, setLoading] = useState(true);



useEffect(()=>{
    getTeamById(id)
    .then((sponse)=> { 
        setName(sponse.name) 
        setCity(sponse.city)
        setState(sponse.state)
    })
    .finally(()=> setLoading(false))
}, [id]);

//I do not have to call it into here, since I have access on a global scope
const handleUpdate = async() => {
    // eslint-disable-next-line no-restricted-globals
    const updateTeam = confirm(`Would you like to update ${name}?`);
    if (updateTeam){
        updateTeamById(id, {name, city, state})
        
       history.push(`/teams/${id}`) 
    }
};

//I want to go from display to edit
//Switch State- like a light switch-when the user flips a switch form display to edit
//edit ? <Edit> : <Display> -idea by Zack and Michael
//based on button true or false

// const handleDelete = async ({ id, name }) => {
//     const deleteTeam = confirm(`You are attempting to delete ${name}, did you mean to do this?`);
//     if(deleteTeam) { 
//         await deleteTeamById(id)
//         await teamLoad();
// }
// };




return (
    <>
    <fieldset>
        <legend>Edit Your Team</legend>
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
            value={city}
            onChange={({ target }) => setCity(target.value)}  />

            <label htmlFor='state'>State:</label>   
            <input 
            id='state' 
            name='state' 
            type='text'
            value={state}
            onChange={({ target }) => setState(target.value)}  />

            {/* <button type="button" onClick={() => handleDelete({ id: team.id, name: team.name})}>Delete</button> */}
            <button type="button" onClick={ handleUpdate}>Update</button>
        </form>
    </fieldset>
    </>
)
}
