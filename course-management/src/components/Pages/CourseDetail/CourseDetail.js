import Navbar from "../../Navbar/Navbar";
import './CourseDetail.css';
import avatar from '../../../images/fat.jpg';
import { useNavigate } from "react-router-dom";

const CourseDetail = () => {


    const navigator = useNavigate();

    function handleClick(){
        navigator('/Document')
    }

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
                        <button onClick={handleClick}>Documents</button>
                        <button>Assignments</button>
                    </div>
                </div>
            </div>

            <div className="detailed-container">
                <div className="title">Training content</div>
                <div className="infoCourse">
                    <div className="infoCourse-content">
                        <ul>
                            <li><p>Learn how to create a simple netcentric</p></li>
                            <li><p>Learn how to create a simple netcentric</p></li>
                            <li><p>Learn base knowledge about the Netcentric</p></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="detailed-container">
                <div className="title">Target</div>
                <div className="infoCourse">
                    <div className="infoCourse-content">
                        <ul>
                            <li><p>Have base knowledge in the Netcentric</p></li>
                            <li><p>Have base knowledge in the Netcentric</p></li>
                            <li><p>Have base knowledge in the Netcentric</p></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="detailed-container1">
                <div className="title">Trainee List</div>
                <div className="infoCourse-lst-Trainee">
                    <div className="infoCourse-content">
                        <p>Quan <a href="#" className="fa fa-pencil"></a></p>

                    </div>
                </div>
            </div>
            <div className="detailed-container1">
                <div className="infoCourse-lst-Trainee">
                    <p>Nam <a href="#" className="fa fa-pencil"></a></p>
                </div>
            </div>
            <div className="detailed-container1">
                <div className="infoCourse-lst-Trainee">
                    <p>Phat <a href="#" className="fa fa-pencil"></a></p>
                </div>
            </div>
            <div className="detailed-container1">
                <div className="infoCourse-lst-Trainee">
                    <p>Dang <a href="#" className="fa fa-pencil"></a></p>
                </div>
            </div>
            <div className="detailed-container1">
                <div className="infoCourse-lst-Trainee">
                    <p>Trung <a href="#" className="fa fa-pencil"></a></p>
                </div>
            </div>

            <div className="detailed-container-trainer">
                <div className="title">Trainer</div>
                <div className="infoCourse">

                    <div className="infoCourse-content">
                        <img src={avatar} className="avt" />
                        <h3>Phạm Tiên Trung</h3>
                        <p>10-4-1994</p>
                        <p><a href="#">phamtientrung94@traindemy.edu.vn</a></p>
                    </div>
                </div>
            </div>


        </div>
    )
}
export default CourseDetail;