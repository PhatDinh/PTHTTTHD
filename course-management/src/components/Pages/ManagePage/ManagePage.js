import { Divider, Tab, Tabs, Typography } from "@mui/material"
import { Box } from "@mui/system"
import { useState } from "react"
import Navbar from "../../Navbar/Navbar"
import HomePageTab from "./HomePageTab"



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
                <Tabs value={tabIndex} onChange={handleTabChange} variant="fullWidth" >

                    {labels.map((value, index) => {
                        const tabColor = index === tabIndex ? '#ccffd1' : 'white'
                        return <Tab label={value} sx={{ borderRight: 0.25, borderBottom: 0.25, backgroundColor: tabColor, color: 'black' }} ></Tab>
                    })}
                </Tabs>
            </Box>
            <Box sx={{ padding: 2 }}>
                {tabIndex === 0 && <HomePageTab />}
                {tabIndex === 1}
                {tabIndex === 2 && (
                    <Box>
                        <Typography>The third tab</Typography>
                    </Box>
                )}
            </Box>
        </Box>
    )
}


export default ManagePage