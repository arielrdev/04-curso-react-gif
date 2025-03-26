import { render, screen } from "@testing-library/react"
import GitExpertApp from "../src/GitExpertApp"

describe('testing en  <GitExpertApp />', () => { 
    test('debe ser match con el snapshot', () => { 
    const { container } = render(<GitExpertApp />);

    expect( container ).toMatchSnapshot();
    })

    test('debe mostrar la categoria inicial', () => { 
        render(<GitExpertApp />);
        expect(screen.getByText('Vegeta')).toBeTruthy();
    });
})