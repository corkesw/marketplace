import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';



const Categories = () => {

    const [categories, setCategories] = useState([])
    useEffect(()=> {
        console.log('inside the useEffect')
        axios.get('https://nc-marketplace.herokuapp.com/api/categories')
        .then((res) => {
            setCategories(()=> {
                return res.data.categories
            })
            console.log(res.data.categories)
        })
    }, [])

    return (
        <section>
            <ul>
                {categories.map((category) => {
                    return <li key={category.category_name}>{category.category_name}</li>
                })}
            </ul>

        </section>
    );
};

export default Categories;