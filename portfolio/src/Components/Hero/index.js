import './hero.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import pic from './images/hero.png';

function Hero() {
    return (
        <>
            <div className='hero-component'>
                <div className='hero'>
                    <div className='col-1'>
                        <div className='colume'>
                            <h1>Ghazi Dev ---</h1>
                            <h2>developer from Pakistan.</h2>
                            <p>Let's learn together!</p>
                            <div className='link'>
                                <a href='https://www.linkedin.com/in/mghazidev/'><FontAwesomeIcon className='icon' icon={faLinkedin} /></a>
                                <a href='https://github.com/mghazidev'><FontAwesomeIcon className='icon' icon={faGithub} /></a>
                            </div>
                        </div>
                    </div>
                    <div className='col-2'>
                        <img src={pic} alt={pic} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero