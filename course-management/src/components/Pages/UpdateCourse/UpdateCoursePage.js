
import { useLocation } from "react-router-dom";

import { Button, IconButton, MenuItem, Select, Table, TableBody, TableCell, TableRow, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system"
import { useState } from "react"

import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from "react-router-dom";
import Navbar from "../../Navbar/Navbar";


const UpdateCoursePage = () => {

    const location = useLocation();
    const navigate = useNavigate();

    const [levels, setlevels] = useState(['JS', 'c++']);
    const [levelList, setlevelList] = useState(['A', 'B']);


   

    

    const handleClick = (data) => {
        setlevels(prev => {
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

    const sendlevel = () => {

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
                    <TextField placeholder="Course name" fullWidth></TextField>
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
                                return <MenuItem value={e} key={e} >{e}</MenuItem>
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
                                return <MenuItem value={e} key={e} >{e}</MenuItem>
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
                        <Button variant="contained" size="medium" onClick={sendlevel}>Submit</Button>
                    </Box>
                </Box>



            </Box>
        </Box>
    )

}


export default UpdateCoursePage;

