import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function LoginNavbar() {
    return (
        <>
            <nav className='nav'>
                <a href='/' className='site-name'>Pacrise</a>
                <ul>
                    {/* <li className='active'><Link to="/">Registartion</Link></li> */}
                    <li className='active'><Link to="/Home">Home</Link></li>
                    <li className='active'><Link to="/Dashboard">Dashboard</Link></li>
                    <li className='active'><Link to="/About">About</Link></li>
                    <li className='active'><Link to="/Login">Login</Link></li>


                </ul>
            </nav>
        </>
    );
}

export default LoginNavbar;
