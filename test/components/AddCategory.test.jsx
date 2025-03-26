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

        render(<AddCategory onNewCategory={() => {}} />);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input( input, { target: {value:inputValue} });
        fireEvent.submit( form );

        expect( input.value ).toBe('');
        screen.debug();
     })

 });