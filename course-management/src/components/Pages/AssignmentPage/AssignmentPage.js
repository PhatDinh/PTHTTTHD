import AssignmentCard from "../../AssignmentCard/AssignmentCard";
import Navbar from "../../Navbar/Navbar"
import './AssignmentPage.css';
import Fab from '@mui/material/Fab';
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";


const AssignmentsPage = () => {
    const navigator = useNavigate();

    function handleClick() {
        navigator('/postAsg')
    }


    const [assignments, setAssignments] = useState();

    useEffect(() => {
        async function fetchData() {
            const result = await fetch('http://localhost:8080/api/assignments', {
                method: 'GET',
            }).then(res => {
                return res.json()
            }).then(data => {
                console.log(data);
                setAssignments(data)
            })
        }

        fetchData();
    }, [])




    return (
        <div className="assignmentpage">
            <Navbar title={'Centertric'}></Navbar>
            <div className="assignmentpage-create" onClick={handleClick}><p>Create</p></div>
            {
                assignments?.map(e => {
                    console.log(e);
                    return <AssignmentCard key={e._id} />
                }
                )
            }
        </div>
    )
}


export default AssignmentsPage;