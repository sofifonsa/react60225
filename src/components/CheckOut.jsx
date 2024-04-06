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
                    console.log(`El producto con el nombre ${prod.title} no puede continuar con la compra ya que no posee stock suficiente`);
                    aux = aux.filter(prod => prod.id !== prodBDD.id);
                }
            });
        });

        const aux2 = aux.map(prod => ({ id: prod.id, quantity: prod.quantity, price: prod.price }));

        createOrdenCompra(data.nombre, totalPrice(), aux2, new Date().toLocaleDateString('es-AR', { timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone }))
            .then(ordenCompra => {
                toast.success(`✈️ Muchas gracias por comprar con nosotros, su ID de compra es: ${ordenCompra.id} por un total de $${totalPrice()}. En breve nos contactaremos para realizar envío`, {
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
                        console.log("Orden de compra obtenida:", orden);
                        // Aquí puedes realizar cualquier otra acción necesaria con la orden de compra
                    })
                    .catch(error => {
                        console.error("Error al obtener la orden de compra:", error);
                    });

                // Limpiar el carrito y redirigir al usuario
                emptyCart();
                formRef.current.reset();
                navigate('/');
            })
            .catch(e => {
                toast.error(`Error al generar orden de compra: ${e}`, {
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
                        <h2>Para finalizar compra debe tener productos en el carrito</h2>
                        <Link to={"/"}>
                            <button className="bg-indigo-500 text-white px-4 py-2 rounded">
                                Volver al inicio
                            </button>
                        </Link>
                    </div>
                    :
                    <div className="max-w-md mx-auto p-6 mt-2 bg-gray-200 rounded-md shadow-md">
                        <form action="" ref={formRef} onSubmit={handleSubmit}>
                            <label className="block mb-1 text-gray-700">Name: </label>
                            <input type="text" className="w-full p-2 mb-3 border rounded-md" name="nombre" />
                            <label className="block mb-1 text-gray-700">Apellido: </label>
                            <input type="text" className="w-full p-2 mb-3 border rounded-md" name="apellido" />
                            <label className="block mb-1 text-gray-700">Direccion: </label>
                            <input type="text" className="w-full p-2 mb-3 border rounded-md" name="direccion" />
                            <label className="block mb-1 text-gray-700">DNI: </label>
                            <input type="number" className="w-full p-2 mb-3 border rounded-md" name="dni" />
                            <label className="block mb-1 text-gray-700">Email: </label>
                            <input type="email" className="w-full p-2 mb-3 border rounded-md" name="email" />
                            <label className="block mb-1 text-gray-700">Telefono: </label>
                            <input type="number" className="w-full p-2 mb-3 border rounded-md" name="telefono" />
                            <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded-md">Finalizar</button>
                        </form>
                        <div className="mt-4">
                            <h3 className="text-lg font-bold mb-2">Resumen de la orden:</h3>
                            <ul>
                                {carrito.map((prod, index) => (
                                    <li key={index} className="mb-2">
                                        <span className="font-bold">{prod.title}</span> - Cantidad: {prod.quantity} - Precio: ${prod.price * prod.quantity}
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
