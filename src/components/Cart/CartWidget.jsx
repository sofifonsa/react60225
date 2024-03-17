import React from 'react';
import { ImCart } from "react-icons/im";
import { useCarritoContext } from "../../Context/CartContext"
import { Link } from "react-router-dom"
export const CartWidget = () => {
    const { getItemQuantity } = useCarritoContext()
    return (
    <div className='container'>
    <Link to={'/cart'}>
    <button className="bg-orange-400 text-white px-4 py-2 rounded flex items-center">
                <ImCart />
                <span>{getItemQuantity()}</span>
                </button>
                </Link>
        </div>
    );
}

export default CartWidget;
