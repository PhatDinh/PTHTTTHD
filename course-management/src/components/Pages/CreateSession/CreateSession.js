import './CreateSession.css'
import NavAssess from '../../NavAssess/NavAssess';
import Navbar from '../../Navbar/Navbar';
import { useNavigate } from "react-router-dom";
import ScrollToTop from '../../ScrollToTop';
import { useState } from "react";
import { useForm } from '../useForm';
import { addSession } from '../../../services/localstorage';
const CreateSession = (props) => {
    const navigate = useNavigate(); 
    const{ inputValues, handleInputChange, resetForm } = useForm({
        sessionName: '',
        content:'',
        trainingSkill:'',
        target:''
    })
    function handleClick(url)
    {
        navigate(url);
        console.log('click');
        
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputValues)
        addSession(inputValues);
        resetForm();
    }
   
    return (
        
        <div >
            <ScrollToTop/>
            <Navbar title={"CREATE COURSE"} />
            <NavAssess />

            <div className="session-container">
                <div className="add-session">
                    <label htmlFor="fname">Session name</label>
                    <input type="text" id="fname" placeholder="Session name" name="sessionName" value={inputValues.sessionName} 
                    onChange={handleInputChange} />
                </div>

                <div className="add-session">
                    <label htmlFor="fcontent">Content</label><br></br>
                    <textarea className="field" id="fcontent" name="content" placeholder="Content" 
                    value={inputValues.content} 
                    onChange={handleInputChange}
                    
                    ></textarea>
                </div>

                <div className="add-session">
                    <label htmlFor="fskill">Training skill</label><br></br>
                    <textarea className="field" id="fskill" name="trainingSkill" placeholder="Training skill"
                    value={inputValues.trainingSkill} 
                    onChange={handleInputChange}
                    
                    ></textarea>
                </div>

                <div className="add-session">
                    <label htmlFor="ftar">Target</label><br></br>
                    <textarea className="field" id="ftar" name="target" placeholder="Target" 
                    value={inputValues.target} 
                    onChange={handleInputChange}
                   ></textarea>
                </div>

                <div className="title-add-course-btn">
                    <button className="cancel-btn" onClick={() => handleClick("/AddCourse")}>Cancel</button>
                    <button type ="submit" className="create-btn" onClick={(e) => handleSubmit(e)}>Create</button>
                </div>
            </div>
        </div>
    )
}
export default CreateSession;