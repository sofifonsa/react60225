import './style/App.css'
import { Test } from './components/Test'
import { ItemCount } from './components/ItemCount/ItemCount'
import  NavBar  from './components/NavBar/NavBar'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { Item } from './components/Item/Item'
import { Dolar } from './components/Dolar/Dolar'



export const App = () => {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting={"Bienvenidos al E-Commerce de Galway Home"} />
      <ItemCount />
      <Item product={{ title: "Dublin", description: "-Dinámica, Histórica-", marca: "Working Holiday", stock: 30, price: 2675, img: "https://www.yomeanimo.com/wp-content/uploads/2021/11/los-imperdibles-de-irlanda-1-720x405-1.jpg" }} />
      <Item product={{ title: "Cork", description: "-Vibrante, Acogedora-", marca: "Working Holiday", stock: 40, price: 2365, img: "https://www.yomeanimo.com/wp-content/uploads/2021/11/los-imperdibles-de-irlanda-10-720x405-1.jpg" }} />
      <Item product={{ title: "Galway", description: "-Cultural, Pintoresca-", marca: "Working Holiday", stock: 40, price: 2500, img: "https://www.yomeanimo.com/wp-content/uploads/2021/11/los-imperdibles-de-irlanda-2-720x405-1.jpg" }} />
      <Item product={{ title: "Dingle", description: "-Costero, Encantador-", marca: "Working Holiday", stock: 40, price: 2330, img: "https://www.yomeanimo.com/wp-content/uploads/2021/11/los-imperdibles-de-irlanda-5-720x405-1.jpg" }} />
      <Dolar />
    </>
  )
}
