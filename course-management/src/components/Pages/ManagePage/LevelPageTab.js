import { Button, IconButton, Input, InputAdornment, InputBase, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from "@mui/material"
import { Box } from "@mui/system"
import SearchIcon from '@mui/icons-material/Search';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";




const LevelPageTab = () => {

    const [levels, setLevels] = useState([])



    const navigate = useNavigate();

    const handleCreate = () => {
        navigate('/create-level')
    }

    const fetchData = async () => {
        await fetch('http://localhost:8080/api/levels', {
            method: 'GET'
        }).then(res => res.json()).then(data => {
            setLevels(data)
        });
    }

    useEffect(() => {
        fetchData();
    }, [])


    const deleteLevel = async (id) => {
        await fetch(`http://localhost:8080/api/levels/${id}`, {
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
                    <TextField id="outlined-basic" variant="outlined" placeholder='name' InputProps={{
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
                    <Button variant='contained' size='medium' onClick={handleCreate} >Create Level</Button>
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

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            levels.map((e) => {

                                return <TableRow key={e.levelName} sx={{
                                    border: 1,
                                    borderColor: '#E0E0E0'
                                }}>
                                    <TableCell sx={{
                                        borderBottom: 'none',
                                        display: 'flex',
                                        justifyContent: 'space-between'
                                    }}>{e.levelName} <IconButton onClick={() => deleteLevel(e._id)}><DeleteIcon /> </IconButton>
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


export default LevelPageTab