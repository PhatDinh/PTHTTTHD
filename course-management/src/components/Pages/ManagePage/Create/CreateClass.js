import { Button, IconButton, MenuItem, Select, Table, TableBody, TableCell, TableRow, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system"
import { useEffect, useState } from "react"
import Navbar from "../../../Navbar/Navbar"
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from "react-router-dom";

const CreateClass = () => {


    const navigate = useNavigate();

    const [name, setName] = useState();
    const [desc, setDesc] = useState();

    const [levels, setlevels] = useState([]);
    const [levelList, setLevelList] = useState([]);

    const [departments, setDepartments] = useState([]);
    const [departmentList, setDepartmentList] = useState([]);

    const handleClick = (data) => {
        setlevels((prev) => {
            const temp = prev.filter((e) => e != data);
            return temp;
        });
    };

    const addName = (event) => {
        setName(event.target.value);
    };

    const addDesc = (event) => {
        setDesc(event.target.value);
    };

    const addlevel = (event) => {
        if (!levels.includes(event.target.value)) {
            setlevels((prev) => {
                return [event.target.value];
            });
        }
    };

    const addDepartment = (event) => {
        if (!departments.includes(event.target.value)) {
            setDepartments((prev) => {
                return [event.target.value];
            });
        }
    };

    const fetchLevel = async () => {
        await fetch('http://localhost:8080/api/levels', {
            method: 'GET',
        })
            .then((res) => res.json())
            .then((data) => {
                setLevelList(data);
            });
    };

    const fetchDepartment = async () => {
        await fetch('http://localhost:8080/api/departments', {
            method: 'GET',
        })
            .then((res) => {
                if (!res.ok) throw new Error(res.status);
                else return res.json();
            })
            .then((data) => {
                setDepartmentList(data);
            });
    };

    useEffect(() => {
        fetchLevel();
        fetchDepartment();
    }, []);

    const sendSubmit = async () => {
        await fetch('http://localhost:8080/api/addClass', {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({
                'className': name,
                'description': desc,
                'level': {
                    'levelName': levels[0]
                },
                'department': {
                    'departmentName': departments[0]
                }

            }),
        }).then((res) => console.log(res));
        navigate('/admin');
    };

    const goBack = () => {
        navigate(-1);
    };

    return (
        <Box
            sx={{
                backgroundColor: 'white',
                minHeight: '100vh',
            }}
        >
            <Navbar title="CREATE CLASS"></Navbar>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <Box
                    sx={{
                        width: '80vw',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        marginTop: 10,
                    }}
                >
                    <Typography variant="h6" align="start">
                        Class name
                    </Typography>
                    <TextField
                        placeholder="Class name"
                        onChange={addName}
                        fullWidth
                    ></TextField>
                </Box>
                <Box
                    sx={{
                        width: '80vw',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        marginTop: 10,
                    }}
                >
                    <Typography variant="h6" align="start">
                        Description{' '}
                    </Typography>
                    <TextField
                        placeholder="Description"
                        onChange={addDesc}
                        fullWidth
                        multiline
                    ></TextField>
                </Box>
                <Box
                    sx={{
                        width: '80vw',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        paddingTop: 5,
                    }}
                >
                    <Typography variant="h6" align="start">
                        Departments
                    </Typography>
                    {
                        <Table>
                            <TableBody>
                                {departments?.map((data, index) => {
                                    return (
                                        <TableRow
                                            key={data}
                                            sx={{
                                                border: 1,
                                                borderColor: '#E0E0E0',
                                            }}
                                        >
                                            <TableCell
                                                sx={{
                                                    borderBottom: 'none',
                                                    display: 'flex',
                                                    justifyContent: 'space-between',
                                                }}
                                            >
                                                <Typography>{data}</Typography>{' '}
                                                <IconButton onClick={() => handleClick(data)}>
                                                    <DeleteIcon />
                                                </IconButton>
                                            </TableCell>
                                        </TableRow>
                                    );
                                })}
                            </TableBody>
                        </Table>
                    }

                    <Box
                        sx={{
                            marginTop: 5,
                        }}
                    >
                        <Select
                            label="Choose department"
                            onChange={addDepartment}
                            fullWidth
                        >
                            {departmentList?.map((e) => {
                                return (
                                    <MenuItem value={e.departmentName} key={e._id}>
                                        {e.departmentName}
                                    </MenuItem>
                                );
                            })}
                        </Select>
                    </Box>
                    <Box
                        sx={{
                            marginTop: 5,
                            display: 'flex',
                            justifyContent: 'flex-end',
                            alignItems: 'flex-end',
                        }}
                    ></Box>

                    <Typography variant="h6" align="start">
                        Levels
                    </Typography>
                    {
                        <Table>
                            <TableBody>
                                {levels?.map((data, index) => {
                                    return (
                                        <TableRow
                                            key={data}
                                            sx={{
                                                border: 1,
                                                borderColor: '#E0E0E0',
                                            }}
                                        >
                                            <TableCell
                                                sx={{
                                                    borderBottom: 'none',
                                                    display: 'flex',
                                                    justifyContent: 'space-between',
                                                }}
                                            >
                                                <Typography>{data}</Typography>{' '}
                                                <IconButton onClick={() => handleClick(data)}>
                                                    <DeleteIcon />
                                                </IconButton>
                                            </TableCell>
                                        </TableRow>
                                    );
                                })}
                            </TableBody>
                        </Table>
                    }

                    <Box
                        sx={{
                            marginTop: 5,
                        }}
                    >
                        <Select label="Choose level" onChange={addlevel} fullWidth>
                            {levelList?.map((e) => {
                                return (
                                    <MenuItem value={e.levelName} key={e._id}>
                                        {e.levelName}
                                    </MenuItem>
                                );
                            })}
                        </Select>
                    </Box>
                    <Box
                        sx={{
                            marginTop: 5,
                            display: 'flex',
                            justifyContent: 'flex-end',
                            alignItems: 'flex-end',
                        }}
                    >
                        <Button
                            variant="contained"
                            size="medium"
                            onClick={goBack}
                            sx={{
                                marginRight: 4,
                            }}
                        >
                            Cancel
                        </Button>
                        <Button variant="contained" size="medium" onClick={sendSubmit}>
                            Submit
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}


export default CreateClass 