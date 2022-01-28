import './App.css';
import NavBar from './componentes/NavBar/NavBar.js'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer.js'

function App() {
  return (
    <div>
        <NavBar />
        <ItemListContainer greeting="Luna Negra"/>
    </div>
  );
}

export default App;
