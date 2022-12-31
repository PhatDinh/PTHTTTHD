import { IconButton, Input, InputAdornment, InputBase, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from "@mui/material"
import { Box } from "@mui/system"
import SearchIcon from '@mui/icons-material/Search';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import { useState } from "react";




const SkillPageTab = () => {

    const [skills, setSkills] = useState(['C++', 'Java', 'Typescript', 'C#'])


    const [newSkill, setNewSkill] = useState('');


    const addSkill = () => {
        console.log(newSkill)
        if (newSkill === '' || skills.includes(newSkill)) {
            console.log('error');
        }
        else {

            setSkills(prev => {
                return [...prev, newSkill]
            })
            setNewSkill('')
        }
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

                                return <TableRow key={e} sx={{
                                    border: 1,
                                    borderColor: '#E0E0E0'
                                }}>
                                    <TableCell sx={{
                                        borderBottom: 'none',
                                        display: 'flex',
                                        justifyContent: 'space-between'
                                    }}>{e} <DeleteIcon />
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