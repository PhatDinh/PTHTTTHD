


import { Button, IconButton, Input, InputAdornment, InputBase, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from "@mui/material"
import { Box } from "@mui/system"
import SearchIcon from '@mui/icons-material/Search';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import { useState } from "react";
import { useNavigate } from "react-router-dom";




const ClassesPageTab = () => {

    const [classes, setClasses] = useState(['Dev senior', 'Dev junior', 'Dev', 'Intern'])



    const navigate = useNavigate();

    const handleCreate = () => {
        navigate('/create-class')
    }


    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            textAlign: 'center',
            flexDirection: 'column'
        }}>
            <Box sx={{
                marginTop: 5,
                marginLeft: 40,
                marginBottom: 5,
                alignSelf: 'start',
                display: 'flex',
                justifyContent: 'space-between',
                width: '65vw'
            }}>
                <Box>
                    <TextField id="outlined-basic" variant="outlined" placeholder='Class name' InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon />
                            </InputAdornment>

                        ),
                    }} />
                </Box>

                <Box sx={{
                    alignSelf: 'center',

                }}>
                    <Button variant='contained' size='medium' onClick={handleCreate} >Create Class</Button>
                </Box>


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
                            <TableCell sx={{
                                borderBottom: 'none',
                                background: '#F4F5FF'
                            }}>
                                STATUS
                            </TableCell>
                            <TableCell sx={{
                                borderBottom: 'none',
                                background: '#F4F5FF'
                            }}>
                                METHOD
                            </TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            classes.map((e) => {

                                return <TableRow key={e} sx={{
                                    border: 1,
                                    borderColor: '#E0E0E0'
                                }}>
                                    <TableCell sx={{
                                        borderBottom: 'none',
                                        display: 'flex',
                                        justifyContent: 'space-between'
                                    }}>{e}
                                    </TableCell>
                                </TableRow>
                            })
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    )
}


export default ClassesPageTab