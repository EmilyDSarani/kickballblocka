import React from 'react'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getTeamById } from '../../services/teams';

export default function TeamDetail({ match }) {
const { id } = match.params;
const [team, setTeam] = useState(null);
const [loading, setLoading] = useState(true);

useEffect(()=>{
    getTeamById(id)
    .then((sponse)=> setTeam(sponse))
    .finally(()=> setLoading(false))
}, [id]);
if(loading) return <h2>Kicker up!</h2>;


    return (
        <div>
            <p>
                <Link to='/teams'>Select different Team</Link>
            </p>
            <h2>{team.name}</h2>
            <p>
                From {team.city}, {team.state}
            </p>
            <ul>
                {team.players.map((player) => {
                    return (
                        <li key={player.id}>
                            {player.position}-{player.name}
                        </li>
                    );
                    
                })}
            </ul>
        </div>
    )
}

//match.params only worked with the render method
//useParams does not work with render method
//the demo deconstructs the label from app.js where you can set a 