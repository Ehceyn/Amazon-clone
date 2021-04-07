import React from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../StateProvider';
import {getBasketTotal} from '../Reducer'

function Subtotal(props) {
    const [{basket}, dispatch]= useStateValue();


    return (
        <div className='subtotal'>
            {/* Price */}
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                Subtotal ({basket.length} items): <strong>{`${value}`}</strong>
                        </p>
                        <small className='subtotal-gift'>
                           <input className='subtotal-input' type="checkbox" name="" id=""/> This order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}            
                displayType={'text'}
                thousandSeperator={true}
                prefix={'$'}
            />

            <button>Proceed to Checkout</button>
        </div>
    );
}

export default Subtotal;