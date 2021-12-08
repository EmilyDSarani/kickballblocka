import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import TeamDetail from './TeamDetail';

it('should render a team page', async () => {
    render(
        <MemoryRouter>
            <TeamDetail
            match={{params: {id: '10'}}}
            />
        </MemoryRouter>
    );
    screen.getByText('Kicker up!');
    const team = await screen.findByText('Acme USA', {
        exact:false,
    });
    expect(team).toBeInTheDocument();
})
