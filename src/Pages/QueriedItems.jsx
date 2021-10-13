import React from 'react';
import axios from 'axios'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const QueriedItems = () => {
    const {category} = useParams()
    const [itemList, setItemList] = useState([])
    useEffect( ()=> {
        axios.get(`https://nc-marketplace.herokuapp.com/api/categories/${category}`)
        .then((res) => {
            console.log(res.data)
        })
    }, [category] )
    return (
        <div>
            
        </div>
    );
};

export default QueriedItems;