import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock("../../src/hooks/useFetchGifs");

describe('Testing en <GifGrid />', () => { 
    const category = 'Vegete';

    test('debe de mostrar el loading inicialmente', () => { 

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        })
        

        render( <GifGrid category={category}/> );
        expect( screen.getByText('Cargando...') );
        expect( screen.getByText( category ) );
    })

    test('debe de mostrar cuando se cargan las imagenes useFetchGifs', () => { 
        const gifs = [
            {
                id: 'abc',
                title: 'Vegeta',
                url: 'https://comovasperro.com.jpg'
            },
            {
                id: '123',
                title: 'Freezer',
                url: 'https://comovasfreezer.com.jpg'
            }
        ]

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        });
        
        render(<GifGrid category={category} />)
        expect( screen.getAllByRole('img').length ).toBe(2);
    })
})