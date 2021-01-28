import React,{useEffect} from "react";
import { Jumbotron,Container,Button} from "reactstrap";

const Home=()=>{
    useEffect(()=>{
        document.title="Home || LearnCode with Academy";
    },[]);
   return (
       <div>
       <Jumbotron className="text-center bg-primary">
           <h1>Learn Code with Ashish</h1>
           <p>This is developed by LearnCode with Ashish for learning purpose</p>
       <Container>
           <Button color="primary">Start Using</Button>
       </Container>
       </Jumbotron>
       </div>
   );
}

export default Home;