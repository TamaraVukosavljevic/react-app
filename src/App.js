
import './App.css';

import { Route, Link, Switch, BrowserRouter } from 'react-router-dom'
import Homepage  from './Home';
import Contactpage  from './Contact';
import { Navbar, Container, Row, Col} from 'react-bootstrap';

function App() {
  
  return (
    <div className="App">
      < BrowserRouter >
      <Navbar bg="dark" variant="dark">
      <Container>
      <Row className="justify-content-md-center">
          <Col xs lg="2"></Col>
          <Col md="auto">
                <Link to="/home" className="nav_link">
                    <i className="glyphicon glyphicon-home"></i> <span>Home</span>
                </Link>
                
                <Link to="/contactus" className="nav_link">
                    <i className=" glyphicon glyphicon-camera"></i> <span>Contact us</span>
                </Link>
          </Col>
          <Col xs lg="2"></Col>
          </Row>
      </Container>
      </Navbar>
      <div className="content">
        <Container>
          <Switch>
              <Route exact path="/" component={Homepage} />
              <Route exact path="/home" component={Homepage} />
              <Route exact path="/contactus" component={ Contactpage } />
            
          </Switch>
        </Container>
      </div>
   </ BrowserRouter >
    </div>
  );
}

export default App;
