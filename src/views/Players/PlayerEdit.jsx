import { useState, useEffect } from 'react'
import { useHistory } from 'react-router';
import { deletePlayerById, updatePlayerById, getPlayerById } from '../../services/players';

export default function TeamEdit({ match }) {   
const [name, setName] = useState('');
const [position, setPosition] = useState('');
const history = useHistory();
const { id } = match.params;
// const [team, setTeam] = useState(null);
// const [loading, setLoading] = useState(true);


//this useEffect is getting the specific team by its id (which is coming from supabase and it is in global now)
//the .then (like an async-await) is taking the sponse and setting the name, city, and state with it, then to render it the loading is false (which i might not actually need the loading in general but oh well for now)
useEffect(()=>{
    getPlayerById(id)
    .then((sponse)=> { 
        setName(sponse.name) 
        setPosition(sponse.position)
    })
}, [id]);

//I do not have to pass anything into the async here, since I have access on a global scope
const handleUpdate = async() => {
    // eslint-disable-next-line no-restricted-globals
    const updatePlayer = confirm(`Would you like to update ${name}?`);
    if (updatePlayer){
        updatePlayerById(id, {name, position})
        
       history.push(`/players/${id}`) 
    }
};
//then, i just need to create a handleDelete since I am already doing the work for it all. The user will then just go back to the team list page. 
const handleDelete = async() => {
    // eslint-disable-next-line no-restricted-globals
    const deletePlayer = confirm(`Would you like to delete ${name}?`);
    if (deletePlayer){
        deletePlayerById(id)
        
       history.push(`/players`) 
    }
};

return (
    <>
    <fieldset>
        <legend>Edit Your Player</legend>
        <form>
            <label htmlFor='name'>Name:</label>   
            <input 
            id='name' 
            name='name' 
            type='text' 
            value={name}
            onChange={({ target }) => setName(target.value)} 
            />

            <label htmlFor='position'>Position:</label>   
                <input
                id='position' 
                name='position' 
                type='text'
                value={position}
                onChange={({ target }) => setPosition(target.value)}  />

            <button type="button" onClick={handleUpdate}>Update</button>

            <button type="button" onClick={handleDelete}>Delete</button>
        </form>
    </fieldset>
    </>
)
}
