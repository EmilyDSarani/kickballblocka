import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import PlayerDetail from './PlayerDetail';

it('should render a team page', async () => {
    render(
        <MemoryRouter>
            <PlayerDetail
            match={{params: {id: '12'}}}
            />
        </MemoryRouter>
    );
    screen.getByText('Kicker up!');
    const team = await screen.findByText('Betty Grey', {
        exact:false,
    });
    expect(team).toBeInTheDocument();
})