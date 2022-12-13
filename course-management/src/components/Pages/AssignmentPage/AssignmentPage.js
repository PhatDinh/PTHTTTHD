import AssignmentCard from "../../AssignmentCard/AssignmentCard";
import Navbar from "../../Navbar/Navbar"
import './AssignmentPage.css';
import Fab from '@mui/material/Fab';
import { Button } from "@mui/material";



const AssignmentsPage = () =>{
    return (
        <div className="assignmentpage">
            <Navbar title={'Centertric'}></Navbar>
            <div className="assignmentpage-create"><p>Create</p></div>
            <AssignmentCard/>
            <AssignmentCard/>
            <AssignmentCard/>
            <AssignmentCard/>
        </div>
    )
}


export default AssignmentsPage;