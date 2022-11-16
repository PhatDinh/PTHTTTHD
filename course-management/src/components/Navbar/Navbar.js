import './Navbar.css';
import avatar from '../../images/fat.jpg';
import { useNavigate } from 'react-router-dom';

function Navbar(props){
    
    const navigate = useNavigate();

    
    function handleClick() {
        navigate("/Profile")
    }

    return(
        <div className='navbar'>
             <p>{props.title}</p>
            <img className ='avatar' src={avatar} onClick={handleClick}/>
        </div>
           
    )
}


export default Navbar