import { useState } from "react"

export default function AddCategory({ onNewCategory }) {

    const [inputValue, setInputValue] = useState('value initial')

    const onInputChange = (event) => {
        setInputValue(event.target.value)        
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if( inputValue.trim().length <= 1 ) return;
        onNewCategory(inputValue.trim());
        setInputValue('');
    }

    return (
        <form onSubmit={ onSubmit }>
            <input 
                type="text" 
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={ onInputChange }
            />
        </form>
    )
}
