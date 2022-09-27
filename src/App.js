import logo from './logo.svg';
import './App.css';
import NavBar from "./components/NavBar/Navbar";
import {ItemListContainer} from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer title="listado" greeting="curso react"/>
    </div>
  );
}

export default App;
