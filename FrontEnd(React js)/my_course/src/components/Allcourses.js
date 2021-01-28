import React,{useState,useEffect} from 'react';
import {toast} from 'react-toastify';
import Course from './Course';
import base_url from "./../api/bootapi";
import axios from "axios";
const Allcourses=()=>{

   useEffect(()=>{
       document.title ="All courses || LearnCode with Academy";
   },[]);

   //function to server:
   const getAllCoursesFromServer=()=>{
       
       axios.get(`${base_url}/courses`).then(
           (response)=>{
               //success
               console.log(response);
               toast.success("Course has been loaded",{
               position : "bottom-center",
               });
               setCourses(response.data);
           },
           (error)=>{
               //for error
               console.log(error);
               toast.error("something went wrong",{
               position : "bottom-center",   
               });
           }
       );
   }

// loading course fun
    useEffect(()=>{
        getAllCoursesFromServer();
    },[]);
   
    const [courses,setCourses]=useState([
        { title:"Java Course",description:"This is demo course"},
        { title: "Django Course", description: "This is demo course" },
        { title: "Reactjs Course", description: "This is demo course" },
        { title: "Anguler Course", description: "This is demo course" }
    ])
    return(
       <div>
           <h1 className="text-center">All Courses</h1>
           <p className="text-center">List of courses are as follows</p>
           {
               courses.length>0 
               ? courses.map((item)=><Course key={item.id} course={item}/>)
               : "No courses"
           }
       </div>
    );
};

export default Allcourses;