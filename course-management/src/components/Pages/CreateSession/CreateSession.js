import './CreateSession.css'
import NavAssess from '../../NavAssess/NavAssess';
import Navbar from '../../Navbar/Navbar';
import { useNavigate } from "react-router-dom";
import ScrollToTop from '../../ScrollToTop';
const CreateSession = () => {
    const navigate = useNavigate(); 

    function handleClick(url)
    {
        navigate(url);
        console.log('click');
    }
    return (
        
        <div >
            <ScrollToTop/>
            <Navbar title={"CREATE COURSE"} />
            <NavAssess />

            <div className="session-container">
                <div className="add-session">
                    <label for="fname">Session name</label>
                    <input type="text" id="fname" placeholder="Session name" />
                </div>

                <div className="add-session">
                    <label for="fcontent">Content</label><br></br>
                    <textarea className="field" id="fcontent" name="fcontent" placeholder="Content"></textarea>
                </div>

                <div className="add-session">
                    <label for="fskill">Training skill</label><br></br>
                    <textarea className="field" id="fskill" name="fskill" placeholder="Training skill"></textarea>
                </div>

                <div className="add-session">
                    <label for="ftar">Target</label><br></br>
                    <textarea className="field" id="ftar" name="ftar" placeholder="Target"></textarea>
                </div>

                <div className="title-add-course-btn">
                    <button className="cancel-btn" onClick={() => handleClick("/AddCourse")}>Cancel</button>
                    <button className="create-btn">Create</button>
                </div>
            </div>
        </div>
    )
}
export default CreateSession;