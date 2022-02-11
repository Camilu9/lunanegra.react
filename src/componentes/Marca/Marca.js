import './Marca.css';
import natural from '../assets/natural.jpg';
import mano from '../assets/mano.jpg';
import libre from '../assets/libre.jpg';

export default function Marca(){
    return(
        <div className="marca">
            <div>
            <h1>Nuestra historia</h1>
            <p>Luna Negra es un emprendimiento de cosmética natural que busca cuidar al cuerpo y a la Tierra desde cada producto. Entendemos que el cuidado personal y la higiene son prácticas cotidianas que superan su propósito y desprenden más sentidos hoy en día: hablan de nuestro vínculo con nosotrxs mismxs y de nuestra forma de habitar el planeta. Es por eso que creamos cosmética sentida, artesanal, respetuosa de la naturaleza y de todxs lxs seres que la habitamos.</p>
            </div>
            <div>
            <h2>El alma de cada producto está construida sobre los siguientes pilares:</h2>
            </div>
            <div className='div-contenedor-imgs-marca'>
                <div>
                    <h3>100% natural</h3>
                    <p>Los ingredientes que forman parte de cada creación son provenientes de la naturaleza y son respetuosos con ella y con nuestros cuerpos. Esto significa que son biodegradables y que en su elección y producción se considera que conlleven el menor impacto posible en el entorno.</p>
                    <div><img src={natural} alt=""/></div>
                </div>
                <div>
                    <h3>Hecho a mano</h3>
                    <p>En tiempos donde el factor humano y su fuerza de trabajo han perdido valor, creemos revolucionario crear con nuestras propias manos y de manera consciente. Hay una magia muy especial en recibir un producto que fue manufacturado por una persona, sabiendo que la misma fue respetada en el proceso de producción.</p>
                    <div><img src={mano} alt=""/></div>
                </div>
                <div>
                    <h3>Libre de crueldad</h3>
                    <p>En coherencia con los otros pilares, creemos que el mundo no nos pertenece sólo a lxs humanxs y nos resulta determinante que nuestras prácticas no interfieran en la vida de otrxs seres sintientes, menos si es de forma cruel y violenta.</p>
                    <div><img src={libre} alt=""/></div>
                </div>
            </div>
            <div>
            <h2>¿Quiénes estamos creando este proyecto?</h2>
            <p>Somos dos amigas con muchos sueños y pasiones en común, además de muchos años acompañándonos en la vida. Esto también es parte de Luna Negra.</p>
            <p>Te invitamos a tener una nueva experiencia en tus momentos de cuidado personal. Yamila y Paloma.</p>
            </div>
        </div>
    )
}