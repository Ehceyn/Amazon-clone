import React from 'react';
import { useStateValue } from '../StateProvider';
import './Product.css';

function Product(props) {
    const [{},dispatch]= useStateValue();

    const addToBasket=()=> {
        dispatch({
            type: 'ADD_TO_BASKET',
            item:{
                id:props.id,
                title:props.title,
                image:props.image,
                price:props.price,
                rating:props.rating
            }
        });
    };

    return (
        <div className='product'>
            <div className="product-info">
                <p className='product-title'>{props.title}</p>
                <p className="product-price">
                    <small>$</small>
                    <strong>{props.price}</strong>
                </p>
                <div className='product-rating'>
                    {
                        Array(props.rating).fill().map((_)=> <p>⭐</p> )
                    }
                </div>    
           </div>

            <img src={props.image} alt=""/>
            <button onClick={addToBasket}>Add to basket</button>
        </div>
    );
}

export default Product;