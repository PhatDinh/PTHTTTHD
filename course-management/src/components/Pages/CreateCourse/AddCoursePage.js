import Navbar from "../../Navbar/Navbar";
import './AddCoursePage.css';
import NavAssess from '../../NavAssess/NavAssess';
import { useNavigate } from "react-router-dom";
import ScrollToTop from '../../ScrollToTop';

function AddCoursePage(props) {

    const navigate = useNavigate(); 

    function handleClick(url)
    {
        navigate(url);
        console.log('click');
    }
    return (
        <div className="container-addCourse">
            <ScrollToTop/>
            <div>
                <Navbar title="CREATE COURSE" />
                <NavAssess />

            </div>
            <div className="title-add-course">
                <label for="fname">First name</label>
                <input type="text" id="fname" placeholder="course name" />
            </div>

            <div className="title-container">
                <div className="label1">
                    <label for="froom">Room</label>
                    <label for="fpass">Password</label>
                </div>
                <div className="title-add-course1">
                    <input type="text" id="froom" placeholder="Room URL" />
                    <input type="text" id="fpass" placeholder="Password" />
                </div>
            </div>

            <div className="title-add-course">
                <label for="fdes">Description</label><br></br>
                <textarea className="field" id="fdes" name="fdes" placeholder="Description"></textarea>
            </div>

            <div className="title-add-course">
                <label for="fskill">Training skill</label><br></br>
                <textarea className="field" id="fskill" name="fskill" placeholder="Training skill"></textarea>
            </div>

            <div className="title-add-course">
                <label for="ftar">Target</label><br></br>
                <textarea className="field" id="ftar" name="ftar" placeholder="Target"></textarea>
            </div>

            <h4>Sessions</h4>
            <div className="title-add-course2">
                <p>Centertric
                    <a href="#" className="fa fa-trash"></a>
                    <a href="#" className="fa fa-pencil"></a>
                </p>

            </div>
            <div className="title-add-course2">
                <p>Quantumalia
                    <a href="#" className="fa fa-trash"></a>
                    <a href="#" className="fa fa-pencil"></a>
                </p>

            </div>
            <div className="title-add-course2">
                <p>EFTL
                    <a href="#" className="fa fa-trash"></a>
                    <a href="#" className="fa fa-pencil"></a>
                </p>

            </div>

            <div className="title-add-course">
                <button className="add-btn" onClick ={() =>handleClick('/AddSession')}>+</button>
            </div>

            <div className="title-add-course-btn">
                <button className="cancel-btn">Cancel</button>
                <button className="create-btn">Create</button>
            </div>
        </div>

    )
}
export default AddCoursePage;