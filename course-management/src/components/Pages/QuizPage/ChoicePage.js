import { Button, Dialog, DialogTitle } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { useAsyncError, useLocation, useNavigate } from "react-router";
import Navbar from "../../Navbar/Navbar";
import ChoiceBox from "./ChoiceBox";



const ChoicePage = () => {

    const location = useLocation();
    const navigate = useNavigate();

    const quiz = location.state.quiz;

    const questions = quiz.map((data, index) => data.question)

    const answer = quiz.map((data, index) => data.answers)

    const holder = Array.from(questions, value => '');
    const [answerBox, setAnswerBox] = useState([]);


    const rightAnswer = quiz.map((data, index) => data.rightAnswer)

    const sendResult = () => {
        checkResult();
        setOpen(true)
        
    }

    const [score, setScore] = useState(0)


    const [open, setOpen] = useState(false);


    const handleClose = () => {
        setOpen(false)
        navigate(-1)
    }

    const checkResult = () => {
        answerBox?.map(
            (e, index) => {
                console.log(rightAnswer[index])
                console.log(answer[index][e])
                if (answer[index][e] === rightAnswer[index]) {
                    setScore(prev => prev + 1)
                }
            }
        )
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
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Your score is {score} / {questions.length}</DialogTitle>
            </Dialog>

        </Box>
    )
}


export default ChoicePage