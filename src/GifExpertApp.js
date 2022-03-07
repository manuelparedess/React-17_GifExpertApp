import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

const GifExpertApp = () => {

    //const categories = ['Real Madrid', 'Barcelona', 'Atletico Madrid'];
    const [categories, setCategories] = useState(['Real Madrid']);

    //Para Agregar una categoria
    //const handleAdd = () => {
    //    setCategories([...categories, 'Valencia']);
    //};

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr />



            <ol>
                {
                    categories.map(category => (
                        <GifGrid
                            key={category}
                            category={category}
                        />
                    ))
                }
            </ol>

        </>
    );
};

export default GifExpertApp;