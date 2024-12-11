import { Link } from "react-router-dom"

export const Navbar = () => {
    return (
        <nav>
            <Link to="/">Accueil</Link> | <Link to="/day-one">Corrigés J01</Link> | <Link to="/day-two">Corrigés J02</Link> | <Link to="/posts">Posts</Link> | <Link to="/users">Users</Link>
        </nav>
    )
}