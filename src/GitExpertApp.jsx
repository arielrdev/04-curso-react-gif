import { useState } from "react"
import AddCategory from "./components/AddCategory";

export default function GitExpertApp() {
    const [categories, setCategories] = useState(['One Punch', 'Eder'])

    const onAddCategory = () => {
        const newCategory = 'Nueva Categoria';
        if(categories.includes(newCategory)) return

        setCategories([...categories, newCategory]);
    }


    return (
        <>
            {/** Titulo */}
            <h1>GitExpertApp</h1>

            {/** Input */}
            <AddCategory />
        
            {/** Listado de Gif */}
            <button onClick={onAddCategory}>Agregar</button>

            <ol>
                { categories.map( category => {
                    return <li key={category}>{category}</li>
                }) }
            </ol>
        </>

    )
}
