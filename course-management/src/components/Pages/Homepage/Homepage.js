
import Navbar from "../../Navbar/Navbar";
import './Homepage.css';
import CourseCard from "../../CourseCard/CourseCard";
import { useNavigate } from "react-router-dom";





const Homepage= () => {

    const navigate = useNavigate(); 

    function handleClick(url)
    {
        navigate(url);
        console.log('click');
    }


    return (
        <div className="homepage">
            <Navbar title={'COURSE'}  /> 
            <div className='homepage-header'>
                <h2 className="homepage-title">ALL COURSES - SY2020-2021</h2>
                <button className="homepage-btn" onClick={() => handleClick('/AddCourse')}>Create Course</button>
            </div>
            <div className="homepage-content">
                <CourseCard/>
                <CourseCard/>
                <CourseCard/>
                <CourseCard/>
                <CourseCard/>
                <CourseCard/>
                <CourseCard/>
            </div>
        </div>
    )
}


export default Homepage;