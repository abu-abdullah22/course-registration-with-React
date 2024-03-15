/* eslint-disable react/prop-types */
import { useEffect } from "react";
import Course from "../Course/Course";
import { useState } from "react";

const Courses = ({handleCourseSelect}) => {
    const [courses, setCourses] = useState([]) ; 
    useEffect(()=> {
        fetch('courses.json')
        .then(res=> res.json())
        .then(data => setCourses(data) )
    },[]) ;
    return (
        <div className="grid grid-cols-3 w-3/4 gap-5">
            {
                courses.map(course => <Course key={course.id} course={course} handleCourseSelect={handleCourseSelect}></Course>)
            }
        </div>
    );
};

export default Courses;