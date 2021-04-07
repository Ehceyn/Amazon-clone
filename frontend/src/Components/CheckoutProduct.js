import React from 'react';
import { useStateValue } from '../StateProvider';
import  './CheckoutProduct.css';

function CheckoutProduct(props) {
    const [{basket},dispatch]=useStateValue();

    const removeFromBasket= () => {
        // passes the id to the reducer to remove the id from basket and return the state and the remaining basket items

        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: props.id,
        })
    }

    return (
        <div className='checkoutProduct'>
             <img className="checkoutProduct-image" src={props.image} alt=""/> 

            <div className="checkoutProduct-info">
                <p className='checkoutProduct-title'>{props.title}</p>
                <p className="checkoutProduct-price">
                    <small>$</small>
                    <strong>{props.price}</strong>
                </p>
                <div className='checkoutProduct-rating'>
                    {
                        Array(props.rating).fill().map((_)=> <p>⭐</p> )
                    }
                </div>   

            <button onClick=
            {removeFromBasket}>Remove from basket</button>
            </div>
        </div>
    );
}

export default CheckoutProduct;