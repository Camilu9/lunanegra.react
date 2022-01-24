import './ItemListContainer.css';

function itemList({greeting}){
    return(
        <p className='pItem'>Bienvenido a {greeting}, tu tienda de Cosmética natural</p>
    )
}

export default itemList;