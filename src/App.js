import './App.css';
import NavBar from './componentes/NavBar/NavBar.js';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer.js';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import Marca from './componentes/Marca/Marca'
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route 
          path="/" 
          element={<ItemListContainer greeting="Bienvenido a Luna Negra, tu tienda de cosmética natural" 
        />} />
        <Route 
          path="/producto/:itemId" 
          element={<ItemDetailContainer 
        />} />
        <Route 
          path="/categoria/:nombreCategoria" 
          element={<ItemListContainer greeting="Productos disponibles en esta categoria"
        />} />
        <Route
          path="/marca"
          element={<Marca 
          />} />
      </Routes>
    </div>
  );
}

export default App;
