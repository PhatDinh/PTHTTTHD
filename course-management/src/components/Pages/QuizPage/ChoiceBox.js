import { Box } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";



const ChoiceBox = (props) => {

    const boxColor = (i) => {
        return i === props.select ? 'green' : 'white'
    }

    const setSelected = (i) => {
        props.setSelect(prev => {
            let temp = prev.slice();
            temp[props.index] = i;
            return temp;
        })
    }

    return (
        <Box sx={{
            background: 'white', display: 'flex', flexDirection: 'column', border: "1px solid #E0E0E0", width: '50vw', textAlign: 'center'
        }}>
            <Box sx={{
                borderBottom: "1px solid #E0E0E0", minWidth: '100%'
            }}><p>{props.title}</p></Box>
            <Grid2 container spacing={0}>
                <Grid2 xs={6} sx={{ borderBottom: "1px solid #E0E0E0", borderRight: "1px solid #E0E0E0", backgroundColor: boxColor(0) }} onClick={() => setSelected(0)}  ><p> {props.answer[0]}</p></Grid2>
                <Grid2 xs={6} sx={{ borderBottom: "1px solid #E0E0E0", backgroundColor: boxColor(1) }} onClick={() => setSelected(1)}><p> {props.answer[1]}</p></Grid2>
                <Grid2 xs={6} sx={{ borderRight: "1px solid #E0E0E0", backgroundColor: boxColor(2) }} onClick={() => setSelected(2)}><p> {props.answer[2]}</p></Grid2>
                <Grid2 xs={6} sx={{ backgroundColor: boxColor(3) }} onClick={() => setSelected(3)} ><p> {props.answer[3]}</p></Grid2>
            </Grid2>
        </Box>
    )
}


export default ChoiceBox;