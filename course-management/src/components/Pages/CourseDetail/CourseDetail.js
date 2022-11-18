import Navbar from "../../Navbar/Navbar";
import './CourseDetail.css';

const CourseDetail = () => {
    return (
        <div className="CourseDetail-container">
            <Navbar title={'COURSE DETAIL'} />

            <div className="attend-btn">
                <button>Attend Course</button>
            </div>
            <div className="detailed-container">
                <div className="title">Information</div>
                <div className="infoCourse">
                    <div className="infoCourse-content">
                        <h3 className="info-header">Netcentric 1 - 21 - ITE - 03</h3>
                        <p><a href="#">Zoom: https://meet.google.com/wqk-fhbx-qii</a></p>
                        <p>Password: xzc21za</p>
                        <p>Start time: 01/10/2022 - 01/10/2023</p>
                        <p>Information: create a simple netcentric</p>
                    </div>
                    <div className="info-btn">
                        <button>Documents</button>
                        <button>Assignments</button>
                    </div>
                </div>
            </div>


        </div>
    )
}
export default CourseDetail;