import { render, screen } from "@testing-library/react"
import { GifItem } from "../../src/components/GifItem"

describe('testing en <GifItem.jsx />', () => { 
    const title = 'Dragon Ball';
    const url = 'https://localhost/dragon.jpg';
    const alt = title;

    test('debe ser match con el snapshot', () => { 
        const { container } = render( <GifItem title={title} url={url} />)        
        expect( container ).toMatchSnapshot();
    });

    test('debe de mostar la img y title con la URL indicado', () => { 
        render(<GifItem title={title} url={ url } />)
        // expect( screen.getByRole('img').src).toBe( url );
        // expect( screen.getByRole('img').title).toBe( title );    
        const { src, alt } = screen.getByRole('img');
        expect( src ).toBe(url);
        expect( alt ).toBe( alt );
    });

    test('debe mostrar el titulo como un texto en el componente', () => { 
        render(<GifItem title={title} url={url} /> );
        expect( screen.getByText( title ) ).toBeTruthy();
     })
 })