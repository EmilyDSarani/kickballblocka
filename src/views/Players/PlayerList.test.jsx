import { render } from '@testing-library/react';
import PlayerList from './PlayerList';

it('should render a player list', async () => {
    
    const { container } = render(<PlayerList />);
    expect(container).toMatchSnapshot();
})

//I would like some help going over how to test for a list to be rendering? I am not sure what was really needed to test here. 