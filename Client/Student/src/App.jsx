import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import CoursesList from "./Pages/CoursesList";
import CourseDetails from "./Pages/CourseDetails";
import MyEnrollments from "./Pages/MyEnrollments";
import Player from "./Pages/Player";
import Navbar from "./Components/Navbar";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course-list" element={<CoursesList />} />
        <Route path="/course-list/:input" element={<CoursesList />} />
        <Route path="/course/:id" element={<CourseDetails />} />
        <Route path="/my-enrollments" element={<MyEnrollments />} />
        <Route path="/player/:courseId" element={<Player />} />
      </Routes>
    </>
  );
}
