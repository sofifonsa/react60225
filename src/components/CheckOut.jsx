import { useRef } from "react";
import { useCarritoContext } from "../Context/CartContext.jsx";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { createOrdenCompra, getOrdenCompra, getProduct, updateProduct } from "../firebase/firebase.js";

export const Checkout = () => {
    const formRef = useRef();
    const navigate = useNavigate();
    const { carrito, totalPrice, emptyCart } = useCarritoContext();

    const handleSubmit = (e) => {
        e.preventDefault();
        const datForm = new FormData(formRef.current);
        const data = Object.fromEntries(datForm);
        console.log(data);
        formRef.current.reset();

        let aux = [...carrito];
        aux.forEach(prodCarrito => {
            getProduct(prodCarrito.id).then(prodBDD => {
                if (prodBDD.stock >= prodCarrito.quantity) {
                    prodBDD.stock -= prodCarrito.quantity;
                    updateProduct(prodBDD.id, prodBDD);
                } else {
                    console.log(`The product with the name ${prod.title} You cannot continue with the purchase due to lack of stock`);
                    aux = aux.filter(prod => prod.id !== prodBDD.id);
                }
            });
        });

        const aux2 = aux.map(prod => ({ id: prod.id, quantity: prod.quantity, price: prod.price }));

        createOrdenCompra(data.nombre, totalPrice(), aux2, new Date().toLocaleDateString('es-AR', { timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone }))
            .then(ordenCompra => {
                toast.success(`✈️ Thank you very much for purchasing our services, your purchase ID is: ${ordenCompra.id} for a total price of $${totalPrice()}. We will contact you as soon as possible to finalize details.`, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark"
                });

                // Obtener la orden de compra después de que se haya generado
                getOrdenCompra(ordenCompra.id)
                    .then(orden => {
                        console.log("Purchase order obtained", orden);

                    })
                    .catch(error => {
                        console.error("Error when obtaining the purchase order:", error);
                    });

                // Limpiar el carrito y redirigir al usuario
                emptyCart();
                formRef.current.reset();
                navigate('/');
            })
            .catch(e => {
                toast.error(`Error when obtaining the purchase order: ${e}`, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark"
                });
            });
    };

    return (
        <>
            {
                carrito.length === 0 ?
                    <div>
                        <h2>To complete the purchase you must have products added to the cart</h2>
                        <Link to={"/"}>
                            <button className="bg-indigo-500 text-white px-4 py-2 rounded">
                            Back to top
                            </button>
                        </Link>
                    </div>
                    :
                    <div className="max-w-md mx-auto p-6 mt-2 bg-gray-200 rounded-md shadow-md">
                        <form action="" ref={formRef} onSubmit={handleSubmit}>
                            <label className="block mb-1 text-gray-700">Name: </label>
                            <input type="text" className="w-full p-2 mb-3 border rounded-md" name="nombre" />
                            <label className="block mb-1 text-gray-700">Last Name: </label>
                            <input type="text" className="w-full p-2 mb-3 border rounded-md" name="apellido" />
                            <label className="block mb-1 text-gray-700">Address: </label>
                            <input type="text" className="w-full p-2 mb-3 border rounded-md" name="direccion" />
                            <label className="block mb-1 text-gray-700">ID card or passport: </label>
                            <input type="number" className="w-full p-2 mb-3 border rounded-md" name="dni" />
                            <label className="block mb-1 text-gray-700">E-mail: </label>
                            <input type="email" className="w-full p-2 mb-3 border rounded-md" name="email" />
                            <label className="block mb-1 text-gray-700">Telephone number: </label>
                            <input type="number" className="w-full p-2 mb-3 border rounded-md" name="telefono" />
                            <button type="submit" className="w-full bg-orange-600 text-white px-4 py-2 rounded-md">Finish</button>
                        </form>
                        <div className="mt-4">
                            <h3 className="text-lg font-bold mb-2">Order summary:</h3>
                            <ul>
                                {carrito.map((prod, index) => (
                                    <li key={index} className="mb-2">
                                        <span className="font-bold">{prod.title}</span> - Amount: {prod.quantity} - Price: ${prod.price * prod.quantity}
                                    </li>
                                ))}
                            </ul>
                            <div className="flex justify-between mt-4">
                                <span className="font-bold">Total:</span>
                                <span>${totalPrice()}</span>
                            </div>
                        </div>
                    </div>
            }
        </>
    );
};
