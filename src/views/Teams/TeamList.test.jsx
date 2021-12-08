import { render } from '@testing-library/react';
import TeamList from './TeamList';

it('should render a team list', async () => {
    
    const { container } = render(<TeamList />);
    expect(container).toMatchSnapshot();
})

//I would like some help going over how to test for a list to be rendering? I am not sure what was really needed to test here. 