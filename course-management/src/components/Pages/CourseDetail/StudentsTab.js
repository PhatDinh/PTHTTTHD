import { Typography } from "@mui/material"
import { Box } from "@mui/system"
import { useEffect, useState } from "react"



const StudentsTab = (props) => {

    const [students, setStudents] = useState();

    const courseId = props.courseId

    useEffect(() => {
        const fetchData = async () => {
            await fetch(`http://localhost:8080/api/students/courses`, {
                method: 'GET',
            }).then(res => res.json()).then(data => {
                data?.map(e =>{
                    if (e._id == courseId)
                    {
                        setStudents(data);
                    }
                })
            });
        }
        fetchData();
    }, [])



    return (
        <Box>
            <Box sx={{
                width: '80vw',
                marginLeft: 'auto',
                marginRight: 'auto',
                marginTop: 10,

            }}>
                {console.log(students)}

            </Box>
        </Box>
    )
}

export default StudentsTab