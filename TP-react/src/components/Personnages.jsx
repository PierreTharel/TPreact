import { Card } from './Card'
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement} from '../features/counter/CounterSlice';

function Personnages() {

    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();


    return (
        <>

    <h1>Les Personnages Nintendo</h1>

    <Card>
        <h2>Mario</h2>
        <h4>Super Mario Bros.</h4>
        <h3>Mario, reconnaissable à sa casquette rouge, sa moustache de première classe 
            et sa fameuse salopette, est le plus célèbre plombier du Royaume Champignon !</h3>
            <button onClick={() => dispatch(increment())}>J'aime ce personnage !</button>
            <button onClick={() => dispatch(decrement())}>Je n'aime pas ce personnage</button>

            <p>Nombre de personnes qui aiment ce personnage : {count} </p>

    </Card>

    <Card>
        <h2>Link</h2>
        <h4>The Legend of Zelda</h4>
        <h3>Link est le principal protagoniste de la série fantastique de jeux 
            vidéo The Legend of Zelda. Il est le héros éternel du décor, étant 
             à travers les âges dans une ligne sans fin d'incarnations.</h3>
        <button onClick={() => dispatch(increment())}>J'aime ce personnage !</button>
        <button onClick={() => dispatch(decrement())}>Je n'aime pas ce personnage</button>

        <p>Nombre de personnes qui aiment ce personnage : {count} </p>
    </Card>

    <Card>
        <h2>Donkey Kong</h2>
        <h4>Donkey Kong</h4>
        <h3>Donkey Kong est le protagoniste éponyme, héros et personnage central 
            de la série de jeux vidéo Donkey Kong Country, qui a vu le jour en 
            1994. Il est un Kong, qui habite sur l'Île DK, entouré d'autres Kongs. Il 
            est le petit-fils et successeur de Cranky Kong, l'idole et mentor de Diddy 
            Kong et Dixie Kong. Il est en conflit avec des créatures reptiliennes
             appelées « Kremlings », dont l'objectif est de voler la réserve de 
             bananes que Donkey garde en permanence, et qui est le principal 
             objet de leur dispute (les Kremlings sont aussi obsédés par les 
             bananes que Donkey), au grand dam de Cranky.</h3>
             <button onClick={() => dispatch(increment())}>J'aime ce personnage !</button>
             <button onClick={() => dispatch(decrement())}>Je n'aime pas ce personnage</button>

             <p>Nombre de personnes qui aiment ce personnage : {count} </p>
    </Card>

    </>
    );
  }
  
export default  Personnages;