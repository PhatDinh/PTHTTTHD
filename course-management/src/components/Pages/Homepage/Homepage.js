
import Navbar from "../../Navbar/Navbar";
import './Homepage.css';
import CourseCard from "../../CourseCard/CourseCard";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Tab, Tabs } from "@mui/material";
import { Box } from "@mui/system";





const Homepage = () => {

    const navigate = useNavigate();

    const [courses, setCourses] = useState();

    function handleClick(url) {
        navigate(url);
        console.log('click');
    }

    useEffect(() => {
        async function fetchData() {
            const result = await fetch(
                'http://localhost:8080/api/courses', {
                method: 'GET',
                headers: {
                    'Content-type': 'application/json'
                },
            }
            ).then(res => res.json()).then(data => setCourses(data));

        }

        fetchData();
    }, []
    )


    return (
      <div className="homepage">
        <Navbar title={'COURSE'} />

        <div className="homepage-header">
          <h2 className="homepage-title">ALL COURSES - SY2020-2021</h2>
          {localStorage.getItem('role') == 'teacher' && (
            <button
              className="homepage-btn"
              onClick={() => handleClick('/AddCourse')}
            >
              Create Course
            </button>
          )}
        </div>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'center',
          }}
        >
          {courses?.map((value) => {
            return (
              <Box
                sx={{
                  marginRight: '20px',
                }}
              >
                <CourseCard
                  courseName={value.courseName}
                  description={value.description}
                />
              </Box>
            );
          })}
        </Box>
      </div>
    );
}


export default Homepage;