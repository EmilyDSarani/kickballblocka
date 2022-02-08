import { render, screen } from '@testing-library/react';
import { setupServer } from 'msw/node';
import { rest } from 'msw';
import { Route, Router } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';
import PlayerAdd from './PlayerAdd';
import PlayerDetail from './PlayerDetail';

const player = {
  id: 1,
  created_at: '2021-12-08T20:26:24.408898+00:00',
  name: 'Levy Tate',
  position: 'Catcher',
  team:'Shuffling for Stew'
 
};
//this is magic and only Dangalf will understand the spell creation, we mere students just have to trust
//you need the right methods, you need an array to return, and you need the right get and post methods
//otherwise, just trust the process and doublecheck the code 
const server = setupServer(
  rest.get(
    'https://azamjnpzidcxttlksncv.supabase.co/rest/v1/players',
    (req, res, ctx) => {
      return res(ctx.json(player));
    }
  ),
  rest.post(
    'https://azamjnpzidcxttlksncv.supabase.co/rest/v1/players',
    (req, res, ctx) => {
      return res(ctx.json([player]));
    }
  )
);

beforeAll(() => {
  server.listen();
});

afterAll(() => {
  server.close();
});

it.skip('should add a player and redirect to the player detail page', async () => {
  const history = createMemoryHistory();
  history.push('/players/newplayer');

  render(
    <Router history={history}>
      <Route path='/players/newplayer'>
        <PlayerAdd />
      </Route>
      <Route path='/players/:id' component={PlayerDetail} />
    </Router>
  );

  screen.getByText('Kicker up!');

//   const name = screen.getByLabelText(/name/i);
//   const position = screen.getByLabelText(/position/i);
//   const button = screen.getByRole('button', { name: 'Add a team' });

//   userEvent.type(name, 'Earl E. Bird');
//   userEvent.type(position, 'Catcher');
//   userEvent.click(button);

  await screen.findByText('Levy Tate');
});
//to do testing, have something at the beginning getByText
//at the end of it, do findByText to see the last thing
//then figure out the middle
//getBy and findBy sandwhich essentially...then it clears the state change error, then you can see where it all falls apart easier