import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
    const [categories, setCategories] = useState([]);
    const onAddCategory = (newCategory) => {
        if(categories.includes(newCategory)) return;
        // con la linea de abajo crea listas, una debajo de la otra, sin reemplazar las anteriores
        setCategories([newCategory,...categories]);

        // con la linea de abajo crea una sola lista, porque reemplaza el estado con la nueva lista y borra las anteriores
        //setCategories([newCategory]);
    }
    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory 
                onNewCategory={ onAddCategory }
            />
            {
                categories.map( (category) => <GifGrid category={category} key={category} />)
            }
        </>
  )
}
