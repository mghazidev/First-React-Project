import './navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandsClapping } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
    return (
        <>
        <div className='nav-component'>
            <div className='navbar'>
                <div className='logo'>
                <h1><FontAwesomeIcon className='icon' icon={faHandsClapping} />MGhazi .Dev</h1>
                </div>
                <div className='menu'>
                     <ul>
                        <li><a href=''>All projects</a></li>
                        <li><a href=''>Contacts</a></li>
                    </ul> 
                </div>
            </div>
        </div>
        </>
    )
}

export default Navbar