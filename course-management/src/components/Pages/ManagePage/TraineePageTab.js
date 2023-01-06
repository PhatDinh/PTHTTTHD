import { IconButton, Input, InputAdornment, InputBase, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Button } from "@mui/material"
import { Box } from "@mui/system"
import SearchIcon from '@mui/icons-material/Search';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";




const TraineePageTab = () => {

    const [trainees, setTrainees] = useState([])

    const navigate = useNavigate();

    const fetchData = async () => {
        await fetch('http://localhost:8080/api/users', {
            method: 'GET'
        }).then(res => {
            if (!res.ok) throw new Error(res.status);
            else return res.json();
        }).then(data => {
            console.log(data)
            data.map(e => {
                if (e.role == 'trainer') {
                    setTrainees(prev => {
                        return [...prev, e]
                    })
                }
            })
        });
    }

    useEffect(() => {
        fetchData();
    }, [])


    const doSth = () => {

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
                    <TextField id="outlined-basic" variant="outlined" placeholder='employee name' InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon />
                            </InputAdornment>

                        ),
                    }} />
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
                                LEVEL
                            </TableCell>
                            <TableCell sx={{
                                borderBottom: 'none',
                                background: '#F4F5FF'
                            }}>

                            </TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            trainees.map((e) => {

                                return <TableRow key={e._id} sx={{
                                    border: 1,
                                    borderColor: '#E0E0E0'
                                }}>
                                    <TableCell key={e.name} sx={{
                                        borderBottom: 'none',
                                        display: 'flex',
                                        justifyContent: 'space-between'
                                    }}>{e.name}
                                    </TableCell>
                                    <TableCell key={e.name} sx={{
                                        borderBottom: 'none',
                                        display: 'flex',
                                        justifyContent: 'space-between'
                                    }}>{e.level}
                                    </TableCell>
                                    <TableCell key={e.name} sx={{
                                        borderBottom: 'none',
                                        display: 'flex',
                                        justifyContent: 'space-between'
                                    }}><IconButton onClick={doSth}><DeleteIcon /></IconButton>
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


export default TraineePageTab