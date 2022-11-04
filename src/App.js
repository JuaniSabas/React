import './App.css';
import NavBar from "./components/NavBar/Navbar";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { CardProduct } from "./components/CardProduct/CardProduct";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer.js";
import {CartContainer} from "./components/CartContainer/CartContainer"
import { CartProvider } from './context/CartContext';
import React from 'react'
import ReactDOM from 'react-dom'

function App() {
  //const [products, setProducts]= useState([]);

  return (
    <CartProvider>
    <BrowserRouter>
      <div className="App">
        <div>
          <NavBar/>
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:categoryId" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<CartContainer/>}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
    </CartProvider>
  );
}

export default App;
