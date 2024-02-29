import React from 'react';
import { ImCart } from "react-icons/im";
export const CartWidget = () => {
    return (
        <div className='container'>
            <button className="bg-orange-400 text-white px-4 py-2 rounded flex items-center">
                <ImCart />
                <span>0</span>
                </button>
        </div>
    );
}

export default CartWidget;
