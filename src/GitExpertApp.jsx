import { useState } from "react"
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

export default function GitExpertApp() {
    const [categories, setCategories] = useState(['One Punch', 'Eder'])

    const onAddCategory = (newCategory) => {
        if(categories.includes(newCategory)) return;

        setCategories([...categories, newCategory]);
    }


    return (
        <>
            <h1>GitExpertApp</h1>

            <AddCategory 
                onNewCategory={ onAddCategory }
            />
        
        
            { categories.map( category => {
                return (
                    <GifGrid 
                        key={category}
                        category={category} 
                    />
                )
            }) }
        </>

    )
}
