import React from 'react'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getPlayers } from '../../services/players';

export default function PlayerList() {
    const [players, setPlayers] = useState([]);
    useEffect(()=>{
        getPlayers().then((sponse)=>setPlayers(sponse));
    })
    return (
        <>
        <div>
            <h1>Player Page</h1>
        </div>
        <ul>
            {players.map((player)=>{
                return(
                    <li key={player.id}>
                        <Link to={`/players/${player.id}`}>
                            {player.name}
                        </Link>
                    </li>
                );
            })}
        </ul>
        </>
    )
}
