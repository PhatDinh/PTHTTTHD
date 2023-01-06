import { Divider, Tab, Tabs, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useState } from 'react';
import Navbar from '../../Navbar/Navbar';
import CoursePageTab from './CoursePageTab';

const TeacherPage = (props) => {
  console.log('🚀 ~ file: TeacherPage.js:8 ~ TeacherPage ~ props', props);
  const [tabIndex, setTabIndex] = useState(0);

  const labels = ['Courses', 'Classes', 'Employees'];

  const handleTabChange = (event, newTabIndex) => {
    setTabIndex(newTabIndex);
  };

  return (
    <Box sx={{ backgroundColor: 'white', minHeight: '100vh' }}>
      <Navbar title="Course"></Navbar>
      <Box>
        <Box
          sx={{
            borderRight: 0.25,
            borderBottom: 0.25,
            color: 'black',
          }}
        ></Box>
      </Box>
      <Box sx={{ padding: 2 }}>
        {tabIndex == 0 && <CoursePageTab {...props} />}
      </Box>
    </Box>
  );
};

export default TeacherPage;
