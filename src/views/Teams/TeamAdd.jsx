import React, { useState } from 'react'
import { useHistory } from 'react-router';
import { createTeam } from '../../services/teams';

export default function TeamAdd() {
    const [name, setName] = useState('');
    const [city, setCity] = useState('');
    const[state,setState] = useState('');
    const history = useHistory();

    //useHistory is a hook used, it will be used to navigate to the new url that is being created to the page that we are creating...yes 
    const handleSubmit = async (e) => {
          e.preventDefault();
          
        const sponse =  await createTeam({ name, city, state});
        history.push(`/teams/${sponse[0].id}`);
        };
//for is to htmlFor as class is to className, 
    return (
        <>
        <fieldset>
            <legend>Register Your Team!</legend>
            <form onSubmit={handleSubmit}>
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

                <input type="submit" value="Add your Team" />
            </form>
        </fieldset>
        </>
    )
}
