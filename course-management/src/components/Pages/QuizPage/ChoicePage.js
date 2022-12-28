import { Button } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import Navbar from "../../Navbar/Navbar";
import ChoiceBox from "./ChoiceBox";



const ChoicePage = () => {


    const questions = ['A user sends an HTTP request to a web server on a remote network. During encap', 'A user sends an HTTP request to a web server on a remote network. During encap']
    const answer = [['Application1', 'Application2', 'Application3', 'Application4'], ['Application', 'Application', 'Application', 'Application']]

    const holder = Array.from(questions, value => '');
    const [answerBox, setAnswerBox] = useState([1, 0]);

    const sendResult = () => {
        console.log('sending')
    }


    return (
        <Box sx={{ background: 'white' }}>
            <Navbar title="Choice Quiz"></Navbar>
            <Box sx={{ padding: 0, minWidth: '100vw', background: 'white', minHeight: '100vh', display: 'flex', alignItems: 'center', flexDirection: 'column', gap: 5, marginTop: 10 }}>
                {questions?.map((value, i) => {
                    return <ChoiceBox title={`${i + 1}/ ${questions[i]}`} answer={answer[i]} select={answerBox[i]} setSelect={setAnswerBox} index={i} />
                })}
                <Button variant="contained" size="large" onClick={sendResult} style={
                    {
                        display: 'absolute',
                        margin: '0px 0px 0px 0px'
                    }
                }>SUBMIT</Button>
            </Box>


        </Box>
    )
}


export default ChoicePage