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
import ManagePage from './components/Pages/ManagePage/ManagePage';
import CreateLevel from './components/Pages/ManagePage/Create/CreateLevel';
import CreateDepartment from './components/Pages/ManagePage/Create/CreateDepartment';
import AdminPage from './components/Pages/AdminPage/AdminPage';
import UpdateCoursePage from './components/Pages/UpdateCourse/UpdateCoursePage';
import CreateClass from './components/Pages/ManagePage/Create/CreateClass';
import CoursePageTab from './components/Pages/AdminPage/CoursePageTab';
import TeacherPage from './components/Pages/Teacher/TeacherPage';
import SessionDetail from './components/Pages/CourseDetail/SessionDetail';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div style={{ backgroundColor: 'white', height: '100%' }}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/Teacher" element={<TeacherPage />} />
        <Route path="/Profile" element={<ProfilePage />} />
        <Route path="/AddCourse" element={<AddCoursePage />} />
        <Route path="/CourseDetail" element={<CourseDetail />} />
        <Route path="/SessionDetail" element={<SessionDetail/>}/>
        <Route path="/Document" element={<DocumentPage />} />
        <Route path="/AddSession" element={<CreateSession />} />
        <Route path="/Assignment" element={<AssignmentsPage />} />
        <Route path="/postAsg" element={<PostAssignment />} />
        <Route path="/addQues" element={<AddingQuestion />} />
        <Route path="/addEssay" element={<AddEssay />} />
        <Route path="/choiceQuiz" element={<ChoicePage />} />
        <Route path="/essayQuiz" element={<EssayPage />} />
        <Route path="/manager" element={<ManagePage />} />
        <Route path="/create-level" element={<CreateLevel />} />
        <Route path="/create-department" element={<CreateDepartment />} />
        <Route path="/create-class" element={<CreateClass />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/updateCourse" element={<UpdateCoursePage />} />
      </Routes>
    </BrowserRouter>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

