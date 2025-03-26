import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../src/components/AddCategory"

describe('Testing en <AddCategory />', () => { 
    
    test('debe de cambiar el valor del input', () => { 
        const value = 'Freezer';
        render(<AddCategory onNewCategory={() => {}} />);
        const input = screen.getByRole('textbox');

        fireEvent.input( input, { target: { value: value } } );
        expect( input.value ).toBe(value);
        // screen.debug()
    });

    test('debe de llamar onNewCategory si el input tiene un valor', () => { 
        const inputValue = 'Goku';
        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={ onNewCategory } />);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input( input, { target: {value:inputValue} });
        fireEvent.submit( form );

        expect( input.value ).toBe('');

        expect( onNewCategory ).toHaveBeenCalled(); /** Se espera que esta fn halla sido llamado */
        
        expect( onNewCategory ).toHaveBeenCalledTimes(1); /** Se espera que esta fn haya sido llamado una sola vez */

        expect( onNewCategory ).toHaveBeenCalledWith( inputValue ); /** Evalua que se haya llamado con el valor del input */
     });


     test('no debe llamar el onNewCategory si el input esta vacio', () => { 
        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={onNewCategory} />)

        const form = screen.getByRole('form');

        fireEvent.submit( form );
        expect( onNewCategory ).toHaveBeenCalledTimes(0);
    })

 });