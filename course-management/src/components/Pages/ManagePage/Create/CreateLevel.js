import { Button, IconButton, MenuItem, Select, Table, TableBody, TableCell, TableRow, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system"
import { useEffect, useState } from "react"
import Navbar from "../../../Navbar/Navbar"
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from "react-router-dom";


const CreateLevel = () => {


    const navigate = useNavigate();



    const [name, setName] = useState();
    const [skills, setSkills] = useState([]);


    const [skillList, setSkillList] = useState(['A', 'B']);



    useEffect(() => {
        const fetchData = async () => {
            await fetch('http://localhost:8080/api/skills', {
                method: 'GET'
            }).then(res => res.json()).then(data => {
                setSkillList(data)
            });
        }
        fetchData();
    }, [])




    const handleClick = (data) => {
        setSkills(prev => {
            const temp = prev.filter(e => e != data)
            return temp;
        })
    }

    const addSkill = (event) => {
        if (!skills.includes(event.target.value)) {
            setSkills(prev => {
                return [...prev, event.target.value];
            })
        }
    }

    const addName = (event) => {
        setName(event.target.value)
    }

    const sendSubmit = async () => {
        console.log(name)
        console.log(skills)
        await fetch('http://localhost:8080/api/addLevel', {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({
                'levelName': name,
                'skills': skills,
            }).then(res => {
                console.log(res);
            })
        })
    }


    const goBack = () => {
        navigate(-1);
    }

    return <Box sx={{
        backgroundColor: 'white', minHeight: '100vh'
    }}>
        <Navbar title='CREATE LEVEL'></Navbar>
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
                <Typography variant='h6' align='start'>Level name</Typography>
                <TextField placeholder="level name" onChange={addName} fullWidth></TextField>
            </Box>
            <Box sx={{
                width: '80vw',
                marginLeft: 'auto',
                marginRight: 'auto',
                paddingTop: 5

            }}>
                <Typography variant='h6' align='start'>Skill</Typography>
                {
                    <Table>
                        <TableBody>
                            {
                                skills?.map((data, index) => {
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
                    <Select placeholder='Choose skill' onChange={addSkill} fullWidth>
                        {skillList?.map(e => {
                            return <MenuItem value={e.skillName} key={e.skillName} >{e.skillName}</MenuItem>
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
}


export default CreateLevel 