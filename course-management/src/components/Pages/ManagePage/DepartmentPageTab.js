import { IconButton, Input, InputAdornment, InputBase, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Button } from "@mui/material"
import { Box } from "@mui/system"
import SearchIcon from '@mui/icons-material/Search';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import { useState } from "react";
import { useNavigate } from "react-router-dom";




const DepartmentPageTab = () => {

    const [Departments, setDepartments] = useState(['Accountant', 'Dev', 'HR', 'Optimize'])

    const navigate = useNavigate();


    const handleClick = () => {
        navigate('/create-department');
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

                <Box sx={{
                    alignSelf: 'center',

                }}>
                    <Button variant='contained' size='medium' onClick={handleClick} >Create Department</Button>
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
                            Departments.map((e) => {

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
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    )
}


export default DepartmentPageTab