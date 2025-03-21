import { useState } from "react"

export default function AddCategory() {

    const [inputValue, setInputValue] = useState('value initial')

    const onInputChange = (event) => {
        setInputValue(event.target.value)        
    }

    const onSubmit = (event) => {
        event.preventDefault();
        console.log(inputValue);
        
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
