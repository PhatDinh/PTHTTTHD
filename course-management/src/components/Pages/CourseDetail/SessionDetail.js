
import { Button, Table, TableBody, TableCell, Typography, TableRow, IconButton } from "@mui/material"
import { Box } from "@mui/system"
import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router"
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import Navbar from "../../Navbar/Navbar";


const SessionDetail = () => {

    const location = useLocation();
    const navigate = useNavigate();


    const toDocument = () => {
        navigate('/document')
    }

    const toAssignment = () => {
        navigate('/assignment')
    }


    const session = location.state.session;


    return <Box>
        <Navbar title="SESSION DETAIL"></Navbar>
        <Box sx={{
            backgroundColor: '#E5E5E5',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            height: '100vh',
        }}>
            <Box sx={{
                marginTop: 5,
            }}>
                <Typography sx={{
                    alignSelf: 'start',
                    fontFamily: 'Roboto',
                    fontStyle: 'itallic',
                    fontWeight: 400,
                    fontSize: '22px',
                    lineHeight: '26px',
                    color: '##555555',
                }}>Information</Typography>
                <Box sx={{
                    boxSizing: 'border-box',
                    border: '1px solid #E0E0E0',
                    borderRadius: '20px',
                    width: '60vw',
                    backgroundColor: 'white',
                    padding: 5
                }}>
                    <Typography sx={{
                        fontFamily: 'Roboto',
                        fontStyle: 'normal',
                        fontWeight: 700,
                        fontSize: '20px',
                        lineHeight: '23px',
                        color: '##555555',
                        marginBottom: 3
                    }}>{session.sessionName}</Typography>
                    <Typography sx={{
                        fontFamily: 'Roboto',
                        fontStyle: 'normal',
                        fontWeight: 400,
                        fontSize: '22px',
                        lineHeight: '23px',
                        color: '##555555',
                    }}>{session.content}</Typography>


                </Box>
            </Box>

            <Box sx={{
                marginTop: 5,
            }}>
                <Typography sx={{
                    alignSelf: 'start',
                    fontFamily: 'Roboto',
                    fontStyle: 'itallic',
                    fontWeight: 400,
                    fontSize: '22px',
                    lineHeight: '26px',
                    color: '##555555',
                }}>Training Skill</Typography>
                <Box sx={{
                    boxSizing: 'border-box',

                    border: '1px solid #E0E0E0',
                    borderRadius: '20px',
                    width: '60vw',
                    backgroundColor: 'white',
                    padding: 5
                }}>
                    <Typography sx={{
                        fontFamily: 'Roboto',
                        fontStyle: 'normal',
                        fontWeight: 700,
                        fontSize: '20px',
                        lineHeight: '23px',
                        color: '##555555',
                        marginBottom: 3
                    }}>Skill: </Typography>
                    <Typography sx={{
                        fontFamily: 'Roboto',
                        fontStyle: 'normal',
                        fontWeight: 400,
                        fontSize: '22px',
                        lineHeight: '23px',
                        color: '##555555',
                    }}>{session.trainingSkill}</Typography>
                </Box>




            </Box>
            <Box sx={{
                marginTop: 5,
            }}>
                <Typography sx={{
                    alignSelf: 'start',
                    fontFamily: 'Roboto',
                    fontStyle: 'itallic',
                    fontWeight: 400,
                    fontSize: '22px',
                    lineHeight: '26px',
                    color: '##555555',
                }}>Target</Typography>
                <Box sx={{
                    boxSizing: 'border-box',

                    border: '1px solid #E0E0E0',
                    borderRadius: '20px',
                    width: '60vw',
                    backgroundColor: 'white',
                    padding: 5
                }}>
                    <Typography sx={{
                        fontFamily: 'Roboto',
                        fontStyle: 'normal',
                        fontWeight: 700,
                        fontSize: '20px',
                        lineHeight: '23px',
                        color: '##555555',
                        marginBottom: 3
                    }}>{session.target}</Typography>
                </Box>




            </Box>
        </Box>
    </Box> 
}

export default SessionDetail;