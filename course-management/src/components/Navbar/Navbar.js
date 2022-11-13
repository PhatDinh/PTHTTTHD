import './Navbar.css';


function Navbar(props){
    
    return(
        <div className='navbar'>
             <p>{props.title}</p>
            <img src={props.avatar}/>
        </div>
           
    )
}


export default Navbar