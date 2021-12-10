import{ useState, useEffect } from 'react'
import { useHistory } from 'react-router';
import { createPlayer } from '../../services/players';
import { getTeams } from '../../services/teams'

export default function PlayerAdd() {
    const [name, setName] = useState('');
    const [position, setPosition] = useState('');
    const [teams, setTeams] = useState([]);
    const [teamId, setTeamId]=useState(1)
    //it only works like this because of supabase. because the id is 1, in order to select that first team, you dont worry about onChange. if you dont "makea  change" then there is no team id to update... its weird

    const history = useHistory();

    useEffect(()=>{
        getTeams().then((sponse)=>setTeams(sponse));
    }, []);

    //useHistory is a hook used, it will be used to navigate to the new url that is being created to the page that we are creating...yes 
    const handleSubmit = async (e) => {
          e.preventDefault();
          
        const sponse =  await createPlayer({ name, position, teamId});
        history.push(`/players/${sponse[0].id}`);
        };
//for is to htmlFor as class is to className, 

//in order to create a list of teams, i might need to pull it from state
//is it in global?? could i...hmm...

    return (
        <>
        <fieldset>
            <legend>Register Your Player!</legend>
            <form onSubmit={handleSubmit}>
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

                {/* <input
                id="teamId"
                name="teamId"
                type='radio'
                value={teamId.name}
                onChange={({ target }) => setTeamId(target.value)}  /> */}

                 <select onchange={({ target }) => setTeamId(target.value)} >
                {teams.map((team)=>{
                    return(
                        <option key={team.id}
                        id="team"
                        name="team"
                        type='radio'
                        value={team.name}
                        >
                    {team.name}
                    </option>)})}
                </select>
                <input type="submit" value="Add Player" />

               
            </form>
        </fieldset>
        </>
    )
}
