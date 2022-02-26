import { getDocs, collection } from 'firebase/firestore';
import { baseDatos } from "../componentes/Firebase";


const promesaProductos = new Promise((resolve, reject) => {
    getDocs(collection(baseDatos, "productos")).then(snapshot => {
        const misProductos = snapshot.docs.map((doc) => ({ id:doc.id, ...doc.data() }));
        resolve(misProductos);
    }).catch(error =>{
        reject(error);
    })
})

function getItems(){
    return promesaProductos;
}

export {
    getItems,
}