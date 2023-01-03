import './AssignmentCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClipboardCheck } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';


const AssignmentCard = (props) => {

    const navigator = useNavigate();




    function handleQuiz() {
        if (props.type == 'ChoiceBox') navigator('/choiceQuiz', {
            state: { quiz: props.choiceBox }
        })
        else navigator('/essayQuiz', {
            state: { quiz: props.essay }
        })
    }


    return <div className="assignment-card" onClick={handleQuiz} >

        <div className="assignment-icon-container">
            <FontAwesomeIcon icon={faClipboardCheck} className="assignment-icon" />
        </div>
        <div className="assignment-text">
            <h3>Assignement 1 - Topology</h3>
            <h4>Start: August 20, 2022 at 9:00</h4>
            <h4>Period: 90min</h4>
            <h4>Description:</h4>
            <h4>Score: 10</h4>
            <h4>Point: 5%</h4>
        </div>
    </div>
}


export default AssignmentCard;