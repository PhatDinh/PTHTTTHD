import Navbar from "../../Navbar/Navbar";
import './CourseDetail.css';
import avatar from '../../../images/fat.jpg';
import { useLocation, useNavigate } from "react-router-dom";
import { Box } from "@mui/system";
import { Tab, Tabs } from "@mui/material";
import { useEffect, useState } from "react";
import StudentsTab from "./StudentsTab";
import CourseInfomationTab from "./CourseInfomation";

const CourseDetail = () => {


    const location = useLocation();

    const courseId = location.state.id



    const [tabIndex, setTabIndex] = useState(0);


    const labels = ["Courses Infomation", "Students"];

    const handleTabChange = (event, newTabIndex) => {
        setTabIndex(newTabIndex);
    }


    const TabController = () => {

        return (
            <Box>
                <Box>
                    <Tabs value={tabIndex} onChange={handleTabChange} variant="fullWidth" textColor='primary'>

                        {labels.map((value, index) => {
                            const tabColor = index === tabIndex ? '#ccffd1' : 'white'
                            return <Tab label={value} sx={{ borderRight: 0.25, borderBottom: 0.25, backgroundColor: tabColor, color: 'black' }} ></Tab>
                        })}
                    </Tabs>
                </Box>
                <Box sx={{}}>
                    {tabIndex == 0 && <CourseInfomationTab courseId={courseId} />}
                    {tabIndex == 1 && <StudentsTab />}
                </Box></Box>)
    }


    const studentController = () => {
        return (
            <Box>
                <Box fullwidth></Box>
            </Box>
        )
    }



    return (
        <Box sx={{ backgroundColor: 'white', minHeight: '100vh' }}>
            <Navbar title='Course Detail'></Navbar>
            {localStorage.role == 'student' ? <CourseInfomationTab courseId={courseId}/> : <TabController />}

        </Box>
    )

}
export default CourseDetail;