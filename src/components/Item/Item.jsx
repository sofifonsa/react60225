export const Item = ({ product }) => {
    return (
        <div className=" max-w-xs mx-auto bg-gray-200 p-3 rounded-md shadow-md">
            <img src={`../Data/Img/${product.img}`} alt={`Imagen de ${product.title}`} />
            <h2 className="text-lg font-semibold font-bold mb-2">{product.title} {product.place} </h2>
            <p className="text-gray-700 mb-2 font-semibold">{product.description}</p>
            <p className="text-gray-700 mb-2">Stock: {product.stock}</p>
            <div className="flex justify-between items-center">
                <span className="text-xl font-bold">U$D{product.price}</span>
                <button className="bg-green-700 text-white px-4 py-2 rounded-md hover:bg-orange-600 focus:outline-none font-style: italic">
                Add To Cart
                </button>
            </div>
        </div>
    )
}