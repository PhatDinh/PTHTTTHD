import { Divider, Tab, Tabs, Typography } from "@mui/material"
import { Box } from "@mui/system"
import { useState } from "react"
import Navbar from "../../Navbar/Navbar"
import ClassesPageTab from "./ClassesPageTab"
import CoursePageTab from "./CoursePageTab"



const AdminPage = () => {

    const [tabIndex, setTabIndex] = useState(0);

    const labels = ["Courses", "Classes", "Employees",];

    const handleTabChange = (event, newTabIndex) => {
        setTabIndex(newTabIndex);
    }

    return (
        <Box sx={{ backgroundColor: 'white', minHeight: '100vh' }}>
            <Navbar title='Admin'></Navbar>
            <Box>
                <Tabs value={tabIndex} onChange={handleTabChange} variant="fullWidth" textColor='primary'>

                    {labels.map((value, index) => {
                        const tabColor = index === tabIndex ? '#ccffd1' : 'white'
                        return <Tab label={value} sx={{ borderRight: 0.25, borderBottom: 0.25, backgroundColor: tabColor, color: 'black' }} ></Tab>
                    })}
                </Tabs>
            </Box>
            <Box sx={{ padding: 2 }}>
                {tabIndex == 0 && <CoursePageTab />}
                {tabIndex == 1 && <ClassesPageTab />}
            </Box>
        </Box>
    )
}


export default AdminPage