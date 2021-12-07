import React from 'react'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getTeams } from '../../services/teams'

export default function TeamList() {
    const [teams, setTeams] = useState([]);

    useEffect(()=>{
        getTeams().then((resp)=>setTeams(resp));
    },[]);

    return (
        <>
        <div>
            <h1>Team Page</h1>
        </div>
        <ul>
            {teams.map((team)=>{
                return(
                    <li key={team.id}>
                        <Link to={`/teams/${team.id}`}>
                            {team.name}
                        </Link>
                    </li>
                );
            })}
        </ul>
        </>
    )
}
