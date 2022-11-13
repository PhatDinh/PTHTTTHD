
import './CourseCard.css'


function CourseCard(props){
    return(
        <div className='card'>
            <div className='card-content'>
                <h3 className='card-header'>Netcentric 1</h3>
                <h4>21-ITE-03</h4>
                <h4 className='italic'>s23Lk3sa</h4>
                <p className='italic'>https://meet.google.com/wqk-fhbx-qii</p>
            </div>
            <p className='card-remain'>Student: 20</p>
            
        </div>
    )
}

export default CourseCard;