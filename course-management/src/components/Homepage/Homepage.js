
import Navbar from "../Navbar/Navbar";
import './Homepage.css';
import CourseCard from "../CourseCard/CourseCard";





const Homepage= () => {
    return (
        <div className="homepage">
            <Navbar title={'COURSE'}  /> 
            <h2 className="homepage-title">ALL COURSES - SY2020-2021</h2>
            <div className="homepage-content">
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