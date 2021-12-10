import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom'
import './App.css';
import Home from './views/Home/Home'
import TeamList from './views/Teams/TeamList'
import PlayerList from './views/Players/PlayerList'
import PlayerDetail from './views/Players/PlayerDetail'
import TeamDetail from './views/Teams/TeamDetail'
import TeamAdd from './views/Teams/TeamAdd'
import TeamEdit from './views/Teams/TeamEdit';
import PlayerAdd from './views/Players/PlayerAdd';
import PlayerEdit from './views/Players/PlayerEdit';

function App() {
  return (
    <div className="App">
      <Router>
        <header>
          <NavLink exact activeClassName='active' className="not" to="/">
            Home
          </NavLink>
          <NavLink exact activeClassName='active' className="not" to="/teams">
            List of Teams
          </NavLink>
          <NavLink exact activeClassName='active' className="not" to="/players">
            List of Players
          </NavLink>
        </header>
        <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/teams" exact component={TeamList} />
        <Route path="/teams/newteam" exact  component={TeamAdd} />
        <Route path="/teams/edit/:id" exact component={TeamEdit} />
        <Route path="/teams/:id" exact component={TeamDetail} />
        <Route path="/players" exact component={PlayerList} />
        <Route path="/players/newplayer" exact component={PlayerAdd} />
        <Route path="/players/edit/:id" exact component={PlayerEdit} />
        <Route path="/players/:id"  component = {PlayerDetail} />
        
        </Switch>
      </Router>
    </div>
  );
}

export default App;
