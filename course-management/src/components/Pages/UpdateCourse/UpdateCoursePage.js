
import { useLocation } from "react-router-dom";

import { Button, IconButton, MenuItem, Select, Table, TableBody, TableCell, TableRow, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system"
import { useEffect, useState } from "react"

import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from "react-router-dom";
import Navbar from "../../Navbar/Navbar";


const UpdateCoursePage = () => {

    const location = useLocation();
    const navigate = useNavigate();



    const [name, setName] = useState();
    const [levels, setlevels] = useState(['JS', 'c++']);
    const [levelList, setLevelList] = useState();


    const [departments, setDepartments] = useState(['A']);
    const [departmentList, setDepartmentList] = useState();


    const courseId = location.state.id;


    const addName = (event) => {
        setName(event.target.value)
    }

    const handleClick = (data) => {
        setlevels(prev => {
            const temp = prev.filter(e => e != data)
            return temp;
        })
    }

    const handleDepartment = (data) => {
        setDepartments(prev => {
            const temp = prev.filter(e => e != data)
            return temp;
        })
    }

    const addlevel = (event) => {
        if (!levels.includes(event.target.value)) {
            setlevels(prev => {
                return [...prev, event.target.value];
            })
        }
    }

    const addDepartment = (event) => {
        if (!departments.includes(event.target.value)) {
            setDepartments(prev => {
                return [...prev, event.target.value];
            })
        }
    }


    const fetchData = async () => {
        await fetch('http://localhost:8080/api/levels', {
            method: 'GET'
        }).then(res => res.json()).then(data => {
            setLevelList(data)
        });

        await fetch('http://localhost:8080/api/departments', {
            method: 'GET'
        }).then(res => {
            if (!res.ok) throw new Error(res.status);
            else return res.json();
        }).then(data => {
            setDepartmentList(data)
        });

    }


    useEffect(() => {
        fetchData();
    }, [])


    const sendSubmit = async () => {
        await fetch(`http://localhost:8080/api/courses/${courseId}`, {
            method: 'PUT',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({
                'courseName': name
            })
        }).then(res => console.log(res))
        navigate('/manager')
    }

    const goBack = () => {
        navigate(-1);
    }

    return (
        <Box sx={{
            backgroundColor: 'white', minHeight: '100vh'
        }}>
            <Navbar title='UPDATE COURSE'></Navbar>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
            }}>
                <Box sx={{
                    width: '80vw',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    marginTop: 10,

                }}>
                    <Typography variant='h6' align='start'>Course name</Typography>
                    <TextField placeholder="Course name" onChange={setName} fullWidth></TextField>
                </Box>
                <Box sx={{
                    width: '80vw',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    paddingTop: 5

                }}>
                    <Typography variant='h6' align='start'>Levels</Typography>
                    {
                        <Table>
                            <TableBody>
                                {
                                    levels?.map((data, index) => {
                                        return <TableRow key={data} sx={{
                                            border: 1,
                                            borderColor: '#E0E0E0'
                                        }}>
                                            <TableCell sx={{
                                                borderBottom: 'none',
                                                display: 'flex',
                                                justifyContent: 'space-between'
                                            }}><Typography>{data}</Typography> <IconButton onClick={() => handleClick(data)}><DeleteIcon /></IconButton>
                                            </TableCell>
                                        </TableRow>
                                    })
                                }
                            </TableBody>
                        </Table>
                    }
                    <Box sx={{
                        marginTop: 5
                    }}>
                        <Select label='Choose level' onChange={addlevel} fullWidth>
                            {levelList?.map(e => {
                                return <MenuItem value={e.levelName} key={e._id} >{e.levelName}</MenuItem>
                            })}
                        </Select>
                    </Box>

                </Box>
                <Box sx={{
                    width: '80vw',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    paddingTop: 5

                }}>
                    <Typography variant='h6' align='start'>Department</Typography>
                    {
                        <Table>
                            <TableBody>
                                {
                                    departments?.map((data, index) => {
                                        return <TableRow key={data} sx={{
                                            border: 1,
                                            borderColor: '#E0E0E0'
                                        }}>
                                            <TableCell sx={{
                                                borderBottom: 'none',
                                                display: 'flex',
                                                justifyContent: 'space-between'
                                            }}><Typography>{data}</Typography> <IconButton onClick={() => handleDepartment(data)}><DeleteIcon /></IconButton>
                                            </TableCell>
                                        </TableRow>
                                    })
                                }
                            </TableBody>
                        </Table>
                    }
                    <Box sx={{
                        marginTop: 5
                    }}>
                        <Select label='Choose department' onChange={addDepartment} fullWidth>
                            {departmentList?.map(e => {
                                return <MenuItem value={e.departmentName} key={e._id} >{e.departmentName}</MenuItem>
                            })}
                        </Select>
                    </Box>
                    <Box sx={{
                        marginTop: 5,
                        display: 'flex',
                        justifyContent: 'flex-end',
                        alignItems: 'flex-end',
                    }}>
                        <Button variant="contained" size="medium" onClick={goBack} sx={{
                            marginRight: 4,
                        }}>Cancel</Button>
                        <Button variant="contained" size="medium" onClick={sendSubmit}>Submit</Button>
                    </Box>
                </Box>



            </Box>
        </Box>
    )

}


export default UpdateCoursePage;

