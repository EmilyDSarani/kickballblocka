import { render, screen } from '@testing-library/react';
import { setupServer } from 'msw/node';
import { rest } from 'msw';
import { Route, Router } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';
import TeamAdd from './TeamAdd';
import TeamDetail from './TeamDetail';

const team = {
  id: 1,
  created_at: '2021-12-08T20:26:24.408898+00:00',
  name: 'Joe King',
  city: 'Nashville',
  state: 'TN',
  players: []
};
//this is magic and only Dangalf will understand the spell creation, we mere students just have to trust
//you need the right methods, you need an array to return, and you need the right get and post methods
//otherwise, just trust the process and doublecheck the code 
const server = setupServer(
  rest.get(
    'https://azamjnpzidcxttlksncv.supabase.co/rest/v1/teams',
    (req, res, ctx) => {
      return res(ctx.json(team));
    }
  ),
  rest.post(
    'https://azamjnpzidcxttlksncv.supabase.co/rest/v1/teams',
    (req, res, ctx) => {
      return res(ctx.json([team]));
    }
  )
);

beforeAll(() => {
  server.listen();
});

afterAll(() => {
  server.close();
});

it('should add a team and redirect to the team detail page', async () => {
  const history = createMemoryHistory();
  history.push('/teams/newteam');

  render(
    <Router history={history}>
      <Route path='/teams/newteam'>
        <TeamAdd />
      </Route>
      <Route path='/teams/:id' component={TeamDetail} />
    </Router>
  );

  screen.getByText('Kicker up!');

  const name = screen.getByLabelText(/name/i);
  const city = screen.getByLabelText(/city/i);
  const state = screen.getByLabelText(/state/i);


  userEvent.type(name, 'Home Team');
  userEvent.type(city, 'Big City');
  userEvent.type(state, 'CA');


  await screen.findByText('Joe King');
});

//to do testing, have something at the beginning getByText
//at the end of it, do findByText to see the last thing
//then figure out the middle
//getBy and findBy sandwhich essentially...then it clears the state change error, then you can see where it all falls apart easier