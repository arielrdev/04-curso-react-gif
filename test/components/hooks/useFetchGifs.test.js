import { renderHook, waitFor } from "@testing-library/react"
import { useFetchGifs } from "../../../src/hooks/useFetchGifs"

describe('Testing en el custom hook useFetchGifs', () => { 
    test('debe de inicial el estado inicial', () => { 
        const { result } = renderHook( () => useFetchGifs('Freezer') );
        const { images, isLoading } = result.current;

        expect( images.length ).toBe(0);
        expect( isLoading ).toBeTruthy();
        
    })

    test('debe de retornar un arrelgo de imagenes y isLoading en false', async () => { 
        const { result } = renderHook( () => useFetchGifs('Freezer') );
        
        await waitFor(
            () => expect( result.current.images.length ).toBeGreaterThan(0)
        );

        const { images, isLoading } = result.current;

        expect( images.length ).toBeGreaterThan(0);
        expect( isLoading ).toBeFalsy();
        
    })
})