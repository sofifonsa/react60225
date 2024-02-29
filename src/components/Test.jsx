import { useState } from "react"
import './Test.css'

export const Test = ({ mensaje }) => {
    //Valor - Forma de modificarlo - Valor inicial
    const [numero, setNumero] = useState(0)

    return (
        <div className= "botonañadir">
            <button onClick={() => setNumero(numero + 1)}>Añadir al carrito</button>
            <p>{numero}</p>
            <p>{mensaje}</p>
        </div>
    )
}
