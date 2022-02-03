import './App.css';
import NavBar from './componentes/NavBar/NavBar.js'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer.js'
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <div>
        <NavBar />
        <ItemDetailContainer />
        <ItemListContainer greeting="Luna Negra"/>
    </div>
  );
}

export default App;
