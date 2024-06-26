import { Link } from "react-router-dom";
import { useCarritoContext } from "../Context/CartContext";
import { ItemList } from "../components/ItemList/ItemList";

export const Cart = () => {
    const { carrito, totalPrice, emptyCart } = useCarritoContext();

    return (
        <div className="flex flex-col items-center">
            {carrito.length === 0 ? (
                <>
                    <h1>Empty Cart</h1>
                    <button className="bg-orange-600 text-white px-4 py-2 rounded">
                        <Link to={'/'}>
                            Back To Top
                        </Link>
                    </button>
                </>
            ) : (
                <div>
                    {<ItemList products={carrito} plantilla="ItemCart" />}
                    <div className="mt-4">
                        <p>Purchase Summary: U$D {totalPrice()}</p>
                        <div className="flex justify-between mt-4">
                            <button className="bg-orange-600 text-white px-4 py-2 rounded" onClick={emptyCart}>
                                Empty The Cart
                            </button>
                            <button className="bg-orange-600 text-white px-4 py-2 rounded" >
                                <Link to={'/'}>
                                    Continue Buying
                                </Link>
                            </button>
                            <button className="bg-orange-600 text-white px-4 py-2 rounded" >
                                <Link to={'/checkout'}>
                                    Finalize Purchase
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
