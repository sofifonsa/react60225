import './style/App.css'
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { NavBar } from './components/NavBar/NavBar'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { Item } from './components/Item/Item'
import { Dolar } from './components/Dolar/Dolar'
import { Footer } from './components/Footer'
import { Cart } from './components/cart'
import { Checkout } from './components/CheckOut'
import { ItemDetailsContainer } from './components/ItemDetailsContainer'
import { NotFound } from './components/NotFound'
import { CarritoProvider } from './Context/CartContext.jsx'
import { ToastContainer } from 'react-toastify'

export const App = () => {
  return (
      <BrowserRouter>
      <CarritoProvider>
      <NavBar />
      <ToastContainer />
      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/category/:cid' element={<ItemListContainer />} />
        <Route path='/product/:pid' element={<ItemDetailsContainer />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Dolar />
      <Footer />
      </CarritoProvider>
    </BrowserRouter>
  )
}
