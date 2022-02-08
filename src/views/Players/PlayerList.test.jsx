import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import PlayerList from './PlayerList';

it('should render a player list', async () => {
    
    render(
    <MemoryRouter>
    <PlayerList />
    </MemoryRouter>);

    const player = await screen.findByText('Miles A. Head', {exact: false})
    expect(player).toBeInTheDocument();
})

