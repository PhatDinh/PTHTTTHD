import {
  autocompleteClasses,
  Divider,
  FormControl,
  Grid,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import { Box } from '@mui/system';
import { useEffect, useState } from 'react';
import CourseCard from '../../CourseCard/CourseCard';
import SearchIcon from '@mui/icons-material/Search';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const CoursePageTab = (props) => {
  const navigate = useNavigate();
  const [courses, setCourses] = useState();

  const [skill, setSkill] = useState('');

  const [level, setLevel] = useState('');

  const role = localStorage.getItem('role');

  useEffect(() => {
    async function fetchData() {
      const result = await fetch('http://localhost:8080/api/courses', {
        method: 'GET',
        headers: {
          'Content-type': 'application/json',
        },
      })
        .then((res) => res.json())
        .then((data) => setCourses(data));
    }

    fetchData();
  }, []);

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <Box
        sx={{
          paddingLeft: 15,
        }}
      >
        <Typography
          sx={{
            fontFamily: 'Roboto',
            fontStyle: 'normal',
            fontWeight: 700,
            fontSize: '28px',
            lineHeight: '33px',
            marginTop: 10,
            marginBottom: 3,
          }}
        >
          ALL COURSES - SY2020-2021
        </Typography>
        <Divider light variant="inset" />
        <Box
          sx={{
            marginTop: 5,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <TextField
            id="outlined-basic"
            variant="outlined"
            placeholder="course name "
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />

          <Button
            sx={{
              borderRadius: '5px',
              backgroundColor: '#00C92C',
              color: 'white',
            }}
            onClick={() => navigate(`/AddCourse`)}
            variant="contained"
          >
            Create course
          </Button>
        </Box>
        <Grid2
          container
          spacing={3}
          sx={{
            marginTop: 5,
          }}
        >
          {courses?.map((value) => {
            return (
              <Grid2 xs={4} sx={{}}>
                <CourseCard
                  courseName={value.courseName}
                  room={value.room}
                  description={value.description}
                  id={value._id}
                  style={{}}
                />
              </Grid2>
            );
          })}
        </Grid2>
      </Box>
    </Box>
  );
};

export default CoursePageTab;
