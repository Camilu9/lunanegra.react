import './App.css';
import NavBar from './componentes/NavBar.js'
import ItemListContainer from './componentes/ItemListContainer.js'

function App() {
  return (
    <div>
        <NavBar />
        <ItemListContainer greeting="Luna Negra"/>
    </div>
  );
}

export default App;
