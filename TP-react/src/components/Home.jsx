import { Card } from './Card'


function Home() {  
  return (
    <>

    <h1>Bienvenue sur mon "Fan-Site" Nintendo, l'univers Nintendo à porter de main !</h1>

    <Card>
        <h2>Super Mario Jamboree</h2>
        <h4>Nintendo Switch</h4>
        <h3>Jouez en famille ou entre amis et defiez vous dans des mini-jeux 
            diverstissant sur Nintendo Switch !</h3>
        <button onClick={() => {
        alert('Super Mario Jamboree, Party-Game, 17/10/2024, 44,99€');
        }}>Voir le jeu en detail</button>
    </Card>

    <Card>
        <h2>The Legend of Zelda: Echoes of Wisdom</h2>
        <h4>Nintendo Switch</h4>
        <h3>Faites appel à la sagesse de la princesse Zelda pour sauver le royaume d'Hyrule dans The Legend of Zelda: Echoes of Wisdom sur Nintendo Switch. 
            Utilisez ses nouveaux pouvoirs de façon créative pour explorer le vaste royaume, affronter des monstres, traverser 
            des donjons et enquêter sur les mystérieuses failles qui se sont ouvertes.</h3>
            <button onClick={() => {
        alert('The Legend of Zelda: Echoes of Wisdom, RPG, 26/09/2024, 59,99€');
        }}>Voir le jeu en detail</button>
    </Card>

    <Card>
        <h2>Mario et Luigi : L'Épopée fraternelle</h2>
        <h4>Nintendo Switch</h4>
        <h3>Les deux frères font leur retour pour une nouvelle aventure en haute 
            mer ! Levez l'ancre, partez à la découverte de nombreuses îles et 
            prenez part à des combats au tour par tour dans Mario & Luigi : 
            L'épopée fraternelle sur Nintendo Switch.
        </h3>
        <button onClick={() => {
        alert('Mario et Luigi : l epopee fraternelle, RPG, 07/11/2024, 49,99€');
        }}>Voir le jeu en detail</button>
    </Card>

    </>
  )
}


export default Home
