import React,{Fragment,useEffect,useState} from 'react';
import {Container, Form,FormGroup,Input,Button} from "reactstrap";
import axios from 'axios';
import base_url from './../api/bootapi';
import {toast} from 'react-toastify';

const AddCourse=()=>{
 
    useEffect(() => {
        document.title = "Add Course || LearnCode with Academy";
    }, []);

    const [course,setCourse]=useState({});
    //form hander fun
    const handleForm=(e)=>{
        console.log(course);
        postDatatoServer(course);
        e.preventDefault();
    }

   // create fun to post data on server
   const postDatatoServer=(data)=>{
     axios.post(`${base_url}`,data).then(
         (response)=>{
           console.log(response);
           toast.success("Course datails Submitted");
         },
         (error)=>{
           console.log(error);
           toast.error("Getting some Error")
         }
     )
   }


    return (
        <Fragment>
            <h1 className="text-center my-3">Fill Course Details</h1>
            <Form onSubmit={handleForm}>
                <FormGroup>
                    <label for="userId"> Course Id</label>
                    <Input 
                    type="text" 
                    placeholder="Enter here" 
                    name="userId" 
                    id="userId"
                    onChange={(e)=>{
                    setCourse({...course,id:e.target.value})
                    }}    
                    />
                </FormGroup>
                <FormGroup>
                    <label for="title"> Course Title</label>
                    <Input 
                    type="text" 
                    placeholder="Enter title here" 
                    id="title"
                    onChange={(e)=>{
                    setCourse({...course,title:e.target.value})
                    }
                    }    
                    />
                </FormGroup>
                <FormGroup>
                   <label for="exampleText">Course Description</label>
                   <Input 
                     type="textarea" 
                     placeholder="Enter Description here" 
                     id="description"
                     style={{height:150}}
                     onChange={(e)=>{
                         setCourse({...course,description:e.target.value})
                     }
                     }    
                     />
                </FormGroup>
                <Container className="text-center">
                    <Button type="submit" color="success">
                     Add Course</Button>
                    <Button color="warning ml-2">Clear</Button>
                </Container>
            </Form>
        </Fragment>
    )
}

export default AddCourse;