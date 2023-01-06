import { Divider, Tab, Tabs, Typography } from "@mui/material"
import { Box } from "@mui/system"
import { useState } from "react"
import Navbar from "../../Navbar/Navbar"
import DepartmentPageTab from "./DepartmentPageTab"
import HomePageTab from "./HomePageTab"
import LevelPageTab from "./LevelPageTab"
import SkillPageTab from "./SkillPageTab"
import TraineePageTab from "./TraineePageTab"



const ManagePage = () => {

    const [tabIndex, setTabIndex] = useState(0);

    const labels = ["Courses", "Skills", "Levels", "Departments", "Trainees"];

    const handleTabChange = (event, newTabIndex) => {
        setTabIndex(newTabIndex);
    }

    return (
        <Box sx={{ backgroundColor: 'white', minHeight: '100vh' }}>
            <Navbar title='MANAGE'></Navbar>
            <Box>
                <Tabs value={tabIndex} onChange={handleTabChange} variant="fullWidth" textColor='primary'>

                    {labels.map((value, index) => {
                        const tabColor = index === tabIndex ? '#ccffd1' : 'white'
                        return <Tab label={value} sx={{ borderRight: 0.25, borderBottom: 0.25, backgroundColor: tabColor, color: 'black' }} ></Tab>
                    })}
                </Tabs>
            </Box>
            <Box sx={{ padding: 2 }}>
                {tabIndex === 0 && <HomePageTab />}
                {tabIndex === 1 && <SkillPageTab />}
                {tabIndex === 2 && <LevelPageTab />}
                {tabIndex == 3 && <DepartmentPageTab />}
                {tabIndex == 4 && <TraineePageTab/>}
            </Box>
        </Box>
    )
}


export default ManagePage