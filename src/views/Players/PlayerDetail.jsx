import React from 'react'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getPlayerById } from '../../services/players';

export default function PlayerDetail({ match }) {
    const { id } = match.params;
    const [player, setPlayer] = useState(null);
    const [loading, setLoading] = useState(true);
    
    useEffect(()=>{
        getPlayerById(id)
        .then((sponse)=> setPlayer(sponse))
        .finally(()=> setLoading(false))
    }, [id]);
    if(loading) return <h2>Kicker up!</h2>;
    
    
        return (
            <div>
                <p>
                    <Link to='/players'>Select a different Player</Link>
                    <br />
                    <Link to={`/players/edit/${player.id}`} />
                </p>
                <h2>{player.name}</h2>
            <h3>
             {player.position}
            </h3>
                <p>
                  {player.teams.name}
                </p>
            </div>
        )
    }
    