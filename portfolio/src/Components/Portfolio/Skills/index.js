import './skills.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { Hover, Leave } from './Hover';

function Skills(props) {
    return (
        <>
            <div className='skills-component'>
                <div className='skills'>
                    <div className='category' 
                    onMouseEnter={Hover}
                    onMouseLeave={Leave}
                    >
                        <div className='dropdown'>
                            <div className='content'>
                                <h4>
                                    {props.heading}
                                </h4>
                            </div>
                            <div className='name'>
                                <p>{props.para}</p>
                                <FontAwesomeIcon icon={faArrowDown} className="icon"></FontAwesomeIcon>
                            </div>
                        </div>
                        <span>{props.line}</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Skills