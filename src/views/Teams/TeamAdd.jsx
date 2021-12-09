import React, { useState } from 'react'

export default function TeamAdd() {
    const [name, setName] = useState('');
    const [city, setCity] = useState('');
    const[state,setState] = useState('');

//for is to htmlFor as class is to className, 
    return (
        <>
        <div>
            <h1>Register Your Team!</h1>
        </div>
        <fieldset>
            <form>
                <label htmlFor='name'>Name:</label>   
                <input id='name' name='name' type='text' />
                <label htmlFor='city'>City:</label>   
                <input id='city' name='city' type='text' />
                <label htmlFor='state'>State:</label>   
                <input id='state' name='state' type='text' />

                <input type="submit" value="Add your Team" />
            </form>
        </fieldset>
        </>
    )
}
