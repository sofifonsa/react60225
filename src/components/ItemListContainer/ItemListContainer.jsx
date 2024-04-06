import '../ItemListContainer/ItemListContainer.css'
import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom'
import { ItemList } from "../ItemList/ItemList"
import { getProducts } from "../../firebase/firebase.js"
export const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const { cid } = useParams()

    useEffect(() => {
        getProducts()
                .then(prods => {
                    const productos = prods.filter(prod => prod.stock >0)
                if (cid) {
                    const productosFiltrados = prods.filter(prod => prod.Category == cid)
                    setProducts(productosFiltrados)
                } else {
                    const productosFiltrados = prods.filter(prod => prod.stock > 0)
                    setProducts(productos)
                }

            })
            .catch((error) => console.log(error))
    }, [cid])


    return (
        <div>
            <ItemList products={products} plantilla="Item" />
        </div>
)
}
