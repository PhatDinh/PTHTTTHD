import './CourseCard.css'
import { useNavigate } from "react-router-dom";
import CourseDetail from '../Pages/CourseDetail/CourseDetail';

function CourseCard(props){

    const navigate = useNavigate(); 

    function handleClick(url)
    {
        navigate(url);
        console.log('click');
    }

    return(
        <div className='card' onClick = {() => handleClick('/CourseDetail')}>
            <div className='card-content'>
                <h3 className='card-header'>Netcentric 1</h3>
                <h4>21-ITE-03</h4>  
                <div className='icon-container'>
                    <h4 className='italic'>s23Lk3sa</h4>
                    <i className="fa fa-file"></i>
                </div>
                <div className='icon-container'>
                    <p className='italic'>https://meet.google.com/wqk-fhbx-qii</p>
                    <i className="fa fa-pencil"></i>
                </div>
                
            </div>
            <p className='card-remain'>Student: 20</p>
            
        </div>
    )
}

export default CourseCard;