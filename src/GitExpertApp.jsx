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
            <AddCategory setCategories={ setCategories } />
        
            {/** Listado de Gif */}
            <ol>
                { categories.map( category => {
                    return <li key={category}>{category}</li>
                }) }
            </ol>
        </>

    )
}
