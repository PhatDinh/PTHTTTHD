import AssignmentCard from "../../AssignmentCard/AssignmentCard";
import Navbar from "../../Navbar/Navbar"
import './AssignmentPage.css';
import Fab from '@mui/material/Fab';
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";


const AssignmentsPage = () =>{
    const navigator = useNavigate();

    function handleClick(){
        navigator('/postAsg')
    }
    return (
        <div className="assignmentpage">
            <Navbar title={'Centertric'}></Navbar>
            <div className="assignmentpage-create" onClick = {handleClick}><p>Create</p></div>
            <AssignmentCard/>
            <AssignmentCard/>
            <AssignmentCard/>
            <AssignmentCard/>
        </div>
    )
}


export default AssignmentsPage;