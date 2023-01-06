import { Button, Table, TableBody, TableCell, Typography, TableRow, IconButton } from "@mui/material"
import { Box } from "@mui/system"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router"
import ModeEditIcon from '@mui/icons-material/ModeEdit';



const CourseInfomationTab = (props) => {

    const [course, setCourse] = useState({});


    const navigate = useNavigate();


    const toDocument = () => {
        navigate('/document')
    }

    const toAssignment = () => {
        navigate('/assignment')
    }

    const toSession = (session) =>{
        navigate('/sessionDetail',{
            state: {'session' : session }
        })
    }

    useEffect(() => {
        const fetchData = async () => {
            await fetch(`http://localhost:8080/api/courses/${props.courseId}`, {
                method: 'GET'
            }).then(res => res.json()).then(data => {
                console.log(data.courseName)
                setCourse(data);
            });
        }
        fetchData();
    }, [])



    return <Box sx={{
        backgroundColor: '#E5E5E5',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        height: '100vh',
    }}>
        <Box sx={{
            marginTop: 5,
        }}>
            <Typography sx={{
                alignSelf: 'start',
                fontFamily: 'Roboto',
                fontStyle: 'itallic',
                fontWeight: 400,
                fontSize: '22px',
                lineHeight: '26px',
                color: '##555555',
            }}>Information</Typography>
            <Box sx={{
                boxSizing: 'border-box',
                border: '1px solid #E0E0E0',
                borderRadius: '20px',
                width: '60vw',
                backgroundColor: 'white',
                padding: 5
            }}>
                <Typography sx={{
                    fontFamily: 'Roboto',
                    fontStyle: 'normal',
                    fontWeight: 700,
                    fontSize: '20px',
                    lineHeight: '23px',
                    color: '##555555',
                    marginBottom: 3
                }}>{course.courseName}</Typography>
                <Typography sx={{
                    fontFamily: 'Roboto',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    fontSize: '22px',
                    lineHeight: '23px',
                    color: '##555555',
                }}>{course.description}</Typography>
                <Box sx={{
                    marginTop: 2,

                }}>
                    <Button onClick={toDocument} variant="contained" sx={{
                        marginRight: 3
                    }}>Document</Button>
                    <Button onClick={toAssignment} variant="contained">Assignment</Button>
                </Box>

            </Box>
        </Box>

        <Box sx={{
            marginTop: 5,
        }}>
            <Typography sx={{
                alignSelf: 'start',
                fontFamily: 'Roboto',
                fontStyle: 'itallic',
                fontWeight: 400,
                fontSize: '22px',
                lineHeight: '26px',
                color: '##555555',
            }}>Training Skill</Typography>
            <Box sx={{
                boxSizing: 'border-box',

                border: '1px solid #E0E0E0',
                borderRadius: '20px',
                width: '60vw',
                backgroundColor: 'white',
                padding: 5
            }}>
                <Typography sx={{
                    fontFamily: 'Roboto',
                    fontStyle: 'normal',
                    fontWeight: 700,
                    fontSize: '20px',
                    lineHeight: '23px',
                    color: '##555555',
                    marginBottom: 3
                }}>Skill: </Typography>
                <Typography sx={{
                    fontFamily: 'Roboto',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    fontSize: '22px',
                    lineHeight: '23px',
                    color: '##555555',
                }}>{course.skill?.skillName}</Typography>
            </Box>

            <Box sx={{
                marginTop: 5,
            }}>
                <Typography sx={{
                    alignSelf: 'start',
                    fontFamily: 'Roboto',
                    fontStyle: 'itallic',
                    fontWeight: 400,
                    fontSize: '22px',
                    lineHeight: '26px',
                    color: '##555555',
                }}>Sessions</Typography>
                <Box sx={{
                    boxSizing: 'border-box',
                    border: '1px solid #E0E0E0',
                    borderRadius: '20px',
                    width: '60vw',
                    backgroundColor: 'white',
                }}>
                    <Table>
                        <TableBody>
                            {
                                course.sessions?.map((data, index) => {
                                    return <TableRow key={data} sx={{
                                        border: 1,
                                        borderColor: '#E0E0E0'
                                    }}>
                                        <TableCell sx={{
                                            borderBottom: 'none',
                                            display: 'flex',
                                            justifyContent: 'space-between'
                                        }}><Typography>{data.sessionName}</Typography> <IconButton onClick={() => toSession(data)}><ModeEditIcon /></IconButton>
                                        </TableCell>
                                    </TableRow>
                                })
                            }
                        </TableBody>
                    </Table>
                </Box>
            </Box>
        </Box>
    </Box>
}


export default CourseInfomationTab