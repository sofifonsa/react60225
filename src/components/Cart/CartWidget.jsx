import React from 'react';
import { ImCart } from "react-icons/im";

export const CartWidget = () => {
    return (
        <div className='container'>
            <button>
            <ImCart />
            <span>0</span>
            </button>
        </div>
    );
}

export default CartWidget;