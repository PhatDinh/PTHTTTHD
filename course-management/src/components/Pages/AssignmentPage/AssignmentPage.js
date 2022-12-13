import AssignmentCard from "../../AssignmentCard/AssignmentCard";
import Navbar from "../../Navbar/Navbar"
import './AssignmentPage.css';


const AssignmentsPage = () =>{
    return (
        <div className="assignmentpage">
            <Navbar title={'Centertric'}></Navbar>
            <AssignmentCard/>
            <AssignmentCard/>
            <AssignmentCard/>
            <AssignmentCard/>
        </div>
    )
}


export default AssignmentsPage;