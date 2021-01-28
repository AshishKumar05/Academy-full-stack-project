//import logo from './logo.svg';
import './App.css';
import {Container, Row,Col} from "reactstrap";
import {ToastContainer,toast} from "react-toastify";
import Home from './components/Home';
import Allcourses from './components/Allcourses';
import AddCourse from './components/AddCourse';
import Header from './components/Header';
import Menus from './components/Menus';
import About from './components/About';
import contact from './components/Contact';
import {BrowserRouter as Router,Route} from "react-router-dom";

function App() {

  const btnHandle = () => {
    toast.success("This is my first message",{position:'top-center'});
  };

  return (
  <div>
  <Router>
        <ToastContainer />
        <Container>
          <Header />
          <Row>
            <Col md={4}>
              <Menus />
            </Col>
            <Col md={8}>
            <Route path="/" component={Home} exact />
            <Route path="/add-course" component={AddCourse} exact />
            <Route path="/view-courses" component={Allcourses} exact />
            <Route path="/about" component={About} exact />
              <Route path="/contact" component={contact} exact />
            </Col>
          </Row>
        </Container>
        </Router>
  </div>
  );
}
export default App;
