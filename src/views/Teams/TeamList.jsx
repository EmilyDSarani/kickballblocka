import React from 'react'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getTeams } from '../../services/teams'

export default function TeamList() {
    const [teams, setTeams] = useState([]);

    useEffect(()=>{
        getTeams().then((sponse)=>setTeams(sponse));
    },[]);

    return (
        <>
        <div>
            <h1>Team Page</h1>
            <p>New to the Club?</p>
            <Link to ='/teams/newteam'>Register Your Team </Link>
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
