import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import TeamList from './TeamList';

it('should render a team list', async () => {
    
    render(
        <MemoryRouter>
        <TeamList />
        </MemoryRouter>);
    
        const team = await screen.findByText('Fast but not Furious', {exact: false})
        expect(team).toBeInTheDocument();
    })

//I would like some help going over how to test for a list to be rendering? I am not sure what was really needed to test here. 