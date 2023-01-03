
import { Button, TextareaAutosize, TextField } from "@mui/material";
import { Box, margin } from "@mui/system";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import Navbar from "../../Navbar/Navbar";

const EssayPage = () => {


    const navigate = useNavigate();

    const location = useLocation();

    const quiz = location.state.quiz;

    const questions = quiz.map(data => data.question)



    const holder = Array.from(questions, value => '');

    const [answerBox, setAnswerBox] = useState(holder)



    const [selectQuestion, setSelectQuestion] = useState(1);

    const handleClick = (i) => {
        setSelectQuestion(i);
    }

    const handleAnswer = (event) => {

        console.log(event.target.value)
        setAnswerBox(prev => {
            let items = [...prev];
            let item = items[selectQuestion]
            item = event.target.value
            console.log(item)
            items[selectQuestion] = item;
            return items;
        })
    }

    const sendResult = () => {
        console.log('sending')
        navigate(-1);
    }


    return (
        <div style={{ height: '100vh' }}>
            <Navbar title="Essay Quiz"></Navbar>
            <Box sx={{ background: 'white', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Box
                    sx={{
                        width: '40vw',
                        height: 591,
                        background: "white",
                        border: "1px solid #E0E0E0",
                        borderRadius: 5,
                        overflowY: 'scroll',
                        margin: '0 10px 0 0'

                    }}
                >
                    {questions?.map((value, i) => {

                        const boxColor = i == selectQuestion ? 'grey' : 'white';


                        return <Box key={value}
                            onClick={() => handleClick(i)}
                            sx={
                                {
                                    border: "1px solid #E0E0E0",
                                    margin: 1,
                                    backgroundColor: boxColor,
                                    padding: 5
                                }}  >
                            {i + 1}.{value}
                        </Box>
                    })}
                </Box>
                <TextField
                    multiline
                    rows={25}
                    style={
                        {
                            width: '40vw',
                            minHeight: 591,
                            background: "white",
                            border: "1px solid #E0E0E0",
                            borderRadius: 5
                        }
                    }
                    onChange={handleAnswer}
                    value={answerBox[selectQuestion]}

                />
                <Button variant="contained" size="large" onClick={sendResult} style={
                    {
                        alignSelf: 'end',
                        margin: '0px 50px 50px 0'
                    }
                }>SUBMIT</Button>
            </Box>
        </div>
    )
}


export default EssayPage;