import About from "./about"
import "./navbar.css"
import { Route, Routes, Link } from 'react-router-dom'


const Navbar = () => {

    return (
        <nav>
            <div className="logo">Synapse</div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar