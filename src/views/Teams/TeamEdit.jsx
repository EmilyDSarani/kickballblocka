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
// const [loading, setLoading] = useState(true);


//this useEffect is getting the specific team by its id (which is coming from supabase and it is in global now)
//the .then (like an async-await) is taking the sponse and setting the name, city, and state with it, then to render it the loading is false (which i might not actually need the loading in general but oh well for now)
useEffect(()=>{
    getTeamById(id)
    .then((sponse)=> { 
        setName(sponse.name) 
        setCity(sponse.city)
        setState(sponse.state)
    })
}, [id]);

//I do not have to pass anything into the async here, since I have access on a global scope
const handleUpdate = async() => {
    // eslint-disable-next-line no-restricted-globals
    const updateTeam = confirm(`Would you like to update ${name}?`);
    if (updateTeam){
        updateTeamById(id, {name, city, state})
        
       history.push(`/teams/${id}`) 
    }
};
//then, i just need to create a handleDelete since I am already doing the work for it all. The user will then just go back to the team list page. 
const handleDelete = async() => {
    // eslint-disable-next-line no-restricted-globals
    const deleteTeam = confirm(`Would you like to delete ${name}?`);
    if (deleteTeam){
        deleteTeamById(id, {name, city, state})
        
       history.push(`/teams`) 
    }
};

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

            <button type="button" onClick={ handleDelete}>Delete</button>

            <button type="button" onClick={ handleUpdate}>Update</button>
        </form>
    </fieldset>
    </>
)
}
