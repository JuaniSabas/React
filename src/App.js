import './App.css';
import NavBar from "./components/NavBar/Navbar";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { CardProduct } from "./components/CardProduct/CardProduct";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer.js";

function App() {
  //const [products, setProducts]= useState([]);

  return (
    <BrowserRouter>
      <div className="App">
        <div>
          <NavBar/>
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:categoryId" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
