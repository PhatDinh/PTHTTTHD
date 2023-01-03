import './CourseCard.css'
import { useNavigate } from "react-router-dom";
import CourseDetail from '../Pages/CourseDetail/CourseDetail';
import EditIcon from '@mui/icons-material/Edit';
import { IconButton, Typography } from '@mui/material';
import { Box } from '@mui/system';
import ForwardIcon from '@mui/icons-material/Forward';

function CourseCard(props) {

    const navigate = useNavigate();

    function handleClick(url) {
        navigate(url, {
            state: { id: props.id }
        });
    }


    return (
        <Box sx={{
            border: '1px solid #E0E0E0',
            borderRadius: '10px',
            width: '20vw',
            margin: 0
        }}>
            <Box sx={{
                background: '#0D68BB',
                textAlign: 'left',
                borderTopLeftRadius: '10px',
                borderTopRightRadius: '10px',
                padding: 2,
                paddingLeft: 2,
            }}>
                <Typography sx={{
                    color: 'white',
                    fontSize: '20px',
                    fontWeight: 700,
                    lineHeight: '23px',
                    fontFamily: 'Roboto'
                }}>{props.courseName}</Typography>
                <Typography sx={{
                    color: 'white',
                    fontSize: '16px',
                    fontWeight: 400,
                    lineHeight: '19px',
                    fontFamily: 'Roboto'
                }}>21-ITE-03</Typography>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'start',
                }}>
                    <Typography sx={{
                        color: 'white',
                        fontSize: '16px',
                        fontWeight: 400,
                        fontStyle: 'italic',
                        lineHeight: '19px',
                        fontFamily: 'Roboto',

                    }} y>{props.description}</Typography>
                    {localStorage.getItem('role') != 'student' && <IconButton onClick={() => handleClick('/updateCourse')} sx={{
                        margin: 0,
                        padding: 0
                    }}><EditIcon sx={{
                        color: 'white',
                        fontSize: '16px',
                    }} /></IconButton>}

                </Box>

                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    height: '15px',
                }}
                >
                    <Typography sx={{
                        color: 'white',
                        fontSize: '16px',
                        fontWeight: 400,
                        fontStyle: 'italic',
                        lineHeight: '19px',
                        fontFamily: 'Roboto'
                    }}>{props.room}</Typography>  <IconButton onClick={() => handleClick('/CourseDetail')} sx={{
                        padding: 0
                    }}><ForwardIcon sx={{ color: 'white', fontSize: '16px', }} /></IconButton>
                </Box>
            </Box>
            <Box sx={{
                textAlign: 'right',
                padding: 2
            }}>
                <Typography sx={{
                    fontFamily: 'Roboto',
                    fontStyle: 'normal',
                    fontWeight: 700,
                    fontSize: '14px',
                    lineHeight: '16px',
                }}>Student: 20</Typography>
            </Box>
        </Box>
    )
}

export default CourseCard;