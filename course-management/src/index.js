import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


//Pages
import App from './App';
import Homepage from './components/Pages/Homepage/Homepage';
import ProfilePage from './components/Pages/ProfilePage/ProfilePage';
import CourseDetail from './components/Pages/CourseDetail/CourseDetail';

import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddCoursePage from './components/Pages/CreateCourse/AddCoursePage';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}/>
        <Route path="/Homepage" element={<Homepage/>}/>
        <Route path="/Profile" element={<ProfilePage/>}/>
        <Route path="/AddCourse" element={<AddCoursePage/>}/>
        <Route path ="/CourseDetail" element = {<CourseDetail/>}/>
      </Routes>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

