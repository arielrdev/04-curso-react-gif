import { getGifs } from "../../../src/helpers/getGifs";

describe('Testing en getGifs.js', () => { 
    const category = 'Ariel';

    test('debe de retornar un arreglo de gifs', async () => { 
        const gifs = await getGifs(category);
        expect( gifs.length ).toBeGreaterThan( 0 );
        expect( gifs[0] ).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String)
        })
    })
 })