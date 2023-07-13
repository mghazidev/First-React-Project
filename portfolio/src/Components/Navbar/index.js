import './navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandsClapping } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';


function Navbar() {
    return (
        <>
            <div className='nav-component'>
                <div className='component'>
                    <div className='navbar'>
                        <div className='logo'>
                            <h1><FontAwesomeIcon className='icon' icon={faHandsClapping} />MGhazi .Dev</h1>
                        </div>
                        <div className='menu'>
                            <ul>
                                <li>
                                    <NavLink to="/">Home</NavLink>
                                </li>

                                <li>
                                    <NavLink to="/">About</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/">Projects</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/contact">Contact</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar