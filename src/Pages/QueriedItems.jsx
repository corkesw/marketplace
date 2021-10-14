import React from 'react';
import axios from 'axios'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const QueriedItems = () => {
    const {searchTerm} = useParams()
    const [itemList, setItemList] = useState([])
    useEffect( ()=> {
        console.log(searchTerm, "searchTerm")
        axios.get(`https://nc-marketplace.herokuapp.com/api/items?${searchTerm}`)
        .then((res) => {
            console.log(res.data.items)
          
            setItemList(res.data.items)
        })
    }, [searchTerm] )
    return (
       <ul>
           {itemList.map((item)=>{
               return <li> <img src={`${item.img_url}`} width="100px" height="100px"/> {item.item_name} £{item.price/100}
               
               </li>
           })}
       </ul>
    );
};

export default QueriedItems;