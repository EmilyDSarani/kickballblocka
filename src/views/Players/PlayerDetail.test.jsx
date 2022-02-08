import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import PlayerDetail from './PlayerDetail';

it('should render a team page', async () => {
    render(
        <MemoryRouter>
            <PlayerDetail
            match={{params: {id: '2'}}}
            />
        </MemoryRouter>
    );
    screen.getByText('Kicker up!');
    const team = await screen.findByText('Miles A. Head', {
        exact:false,
    });
    expect(team).toBeInTheDocument();
})