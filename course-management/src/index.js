import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


//Pages
import App from './App';
import Homepage from './components/Pages/Homepage/Homepage';
import ProfilePage from './components/Pages/ProfilePage/ProfilePage';
import CourseDetail from './components/Pages/CourseDetail/CourseDetail';
import CreateSession from './components/Pages/CreateSession/CreateSession';

import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddCoursePage from './components/Pages/CreateCourse/AddCoursePage';
import DocumentPage from './components/Pages/DocumentPage/DocumentPage';
import AssignmentsPage from './components/Pages/AssignmentPage/AssignmentPage';
import PostAssignment from './components/Pages/PostAssignment/PostAssignment';
import AddingQuestion from './components/Pages/AddingQuestion/AddingQuestion';
import AddEssay from './components/Pages/AddEssay/AddEssay';
import ChoicePage from './components/Pages/QuizPage/ChoicePage';
import EssayPage from './components/Pages/QuizPage/EssayPage';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}/>
        <Route path="/Homepage" element={<Homepage/>}/>
        <Route path="/Profile" element={<ProfilePage/>}/>
        <Route path="/AddCourse" element={<AddCoursePage/>}/>
        <Route path ="/CourseDetail" element = {<CourseDetail/>}/>
        <Route path="/Document" element={<DocumentPage/>}/>
        <Route path ="/AddSession" element = {<CreateSession/>}/>
        <Route path="/Assignment" element= {<AssignmentsPage/>}/>
        <Route path ="/postAsg" element ={<PostAssignment/>}/>
        <Route path ="/addQues" element ={<AddingQuestion/>}/>
        <Route path ="/addEssay" element ={<AddEssay/>}/>
        <Route path="/choiceQuiz" element={<ChoicePage />} />
        <Route path="/essayQuiz" element={<EssayPage />} />
      </Routes>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

