import '../ItemListContainer/ItemListContainer.css'
import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom'
import { ItemList } from "../ItemList/ItemList"
export const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const { cid } = useParams()

    useEffect(() => {
        fetch('../Data/Productos.json')
            .then(response => response.json())
        .then(prods => {
                if (cid) {
                    const productosFiltrados = prods.filter(prod => prod.Category == cid)
                    setProducts(productosFiltrados)
                } else {
                    setProducts(prods)
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
