import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../src/components/AddCategory"

describe('Testing en <AddCategory />', () => { 
    
    test('debe de cambiar el valor del input', () => { 
        const value = 'Freezer';
        render(<AddCategory onNewCategory={'eder'}/>);
        const input = screen.getByRole('textbox');

        fireEvent.input( input, { target: { value: value } } );
        expect( input.value ).toBe(value);
        screen.debug()
    });
    
 });