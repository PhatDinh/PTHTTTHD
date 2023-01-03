import { IconButton, Input, InputAdornment, InputBase, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from "@mui/material"
import { Box } from "@mui/system"
import SearchIcon from '@mui/icons-material/Search';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import { useEffect, useState } from "react";




const SkillPageTab = () => {

    const [skills, setSkills] = useState([])


    const [newSkill, setNewSkill] = useState('');

    const fetchData = async () => {
        await fetch('http://localhost:8080/api/skills', {
            method: 'GET'
        }).then(res => res.json()).then(data => {
            setSkills(data)
            localStorage.setItem('skills', skills)
        });
    }

    useEffect(() => {
        fetchData();
    }, [])



    const addSkill = async () => {
        if (newSkill === '' || skills.includes(newSkill)) {
            console.log('error');
        }
        else {
            await fetch('http://localhost:8080/api/addSkill', {
                method: 'POST',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify({
                    'skillName': newSkill
                })
            }).then(res => {
                if (res.ok) fetchData();
            })
            setNewSkill('')
        }
    }

    const deleteSkill = async (id) => {
        await fetch(`http://localhost:8080/api/skills/${id}`, {
            method: 'DELETE',
        }).then(res => {
            if (res.ok) fetchData();
            else console.log(res)
        })
    }


    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            flexDirection: 'column'
        }}>
            <Box sx={{
                alignSelf: 'start',
                marginTop: 5,
                marginLeft: 40,
                marginBottom: 5
            }}>
                <TextField id="outlined-basic" variant="outlined" placeholder='name ' InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon />
                        </InputAdornment>

                    ),
                }} />

            </Box>
            <TableContainer sx={{
                width: '70vw',
                marginLeft: 'auto',
                marginRight: 'auto'
            }} >
                <Table sx={{}} aria-label="simple table" size="medium">
                    <TableHead>
                        <TableRow sx={{
                            border: 1,
                            borderColor: '#E0E0E0'
                        }}>
                            <TableCell sx={{
                                borderBottom: 'none',
                                background: '#F4F5FF'
                            }}>
                                NAME
                            </TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            skills.map((e) => {

                                return <TableRow key={e.skillName} sx={{
                                    border: 1,
                                    borderColor: '#E0E0E0'
                                }}>
                                    <TableCell sx={{
                                        borderBottom: 'none',
                                        display: 'flex',
                                        justifyContent: 'space-between'
                                    }}>{e.skillName} <IconButton onClick={() => deleteSkill(e._id)} > <DeleteIcon /></IconButton>
                                    </TableCell>
                                </TableRow>
                            })
                        }
                        <TableRow sx={{
                            border: 1,
                            borderColor: '#E0E0E0'
                        }}>
                            <TableCell sx={{
                                borderBottom: 'none',
                                display: 'flex',
                                justifyContent: 'space-between'
                            }}><InputBase placeholder="Input Skill Name" value={newSkill} onChange={(e) => { setNewSkill(e.target.value) }} ></InputBase> <IconButton onClick={addSkill}><AddIcon /></IconButton>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    )
}


export default SkillPageTab