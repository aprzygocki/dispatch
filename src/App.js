import React from 'react';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';

import Footer from './components/Footer';
import HomePage from './containers/Login';
import DispatchPage from './pages/DispatchPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import SupervisorPage from './pages/SupervisorPage';
import Login from "./containers/Login";
import Signup from "./containers/Signup";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      userName: 'Cindy',
      // title seems useless here. Navbar Brand renders User Name//
      headerLinks: [
        { title: 'Home', path: '/' },
        { title: 'Login', path: '/login' },
        { title: 'Dispatch', path: '/dispatch' },  
        { title: 'About', path: '/about' },       
        { title: 'Contact', path: '/contact' },
        { title: 'Supervisor', path: '/supervisor' },
      ],
      home: {
        title: 'Home',
        subTitle:'Hi there! Nice to see you again',
        text:'Email',
        
      },
      login: {
        title: 'login here homie',
        subTitle:'dude, login',
        text:'Email',
        
      },
      dispatch: {
        title: 'DISPATCH',
        subTitle:'',
        text: '1 Deckhand Valid Drivers License 8hrs Larkspur Ferry Terminal 1/22/2021 Shift Hours 1300-2100',
      },
      about: {
        title: 'About Me',
      },
      contact: {
        title: 'Let\'s Connect',
      },
      supervisor: {
        title: 'Supervisor',
        subTitle: 'come on',
        text: 'something',
        // subTitle and text don't work //
      },
    };
  }
  render() {
    return (
      <Router>
        <Container className="p=5" fluid={true}>

          <Navbar className="border-bottom" bg="transparent" expand="lg">
            <Navbar.Brand>User Name</Navbar.Brand>

           <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
           <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">
                Home</Link>
                <Link className="nav-link" to="/login">Login</Link>
                <Link className="nav-link" to="/dispatch">Dispatch</Link>
                <Link className="nav-link" to="/about">About</Link>
                <Link className="nav-link" to="/contact">Contact</Link>
                <Link className="nav-link" to="/supervisor">Supervisor</Link>
             </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Route path="/" exact render={()=> 
          <HomePage 
          signin={this.state.home.signin} subTitle={this.state.home.subTitle} text={this.state.home.text} />} />
          
          <Route path="/login">
          <Login />
          </Route>

          <Route path="/signup">
          <Signup />
          </Route>

          <Route path="/dispatch" render={()=>           <DispatchPage 
            title={this.state.dispatch.title} 
            subTitle={this.state.dispatch.subTitle} 
            text={this.state.dispatch.text} />} />

          <Route path="/about" render={()=> 
          <AboutPage 
          title={this.state.about.title} />} />

          <Route path="/contact" render={()=> <ContactPage 
          title={this.state.contact.title} />} />

          <Route path="/supervisor" render={()=> <SupervisorPage 
          title={this.state.supervisor.title} 
          subTitle={this.state.supervisor.subTitle} 
          text={this.state.supervisor.text} />} />
         {/* why isn't subTitle or text working? */}
          <Footer/>

        </Container>
      </Router>
    );
  }  
}
export default App;