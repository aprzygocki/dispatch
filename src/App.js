import React from 'react';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';

import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import SupervisorPage from './pages/SupervisorPage';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: 'Augustino Przygocki',
      headerLinks: [
        { title: 'Home', path: '/' },        
        { title: 'About', path: '/about' },       
        { title: 'Contact', path: '/contact' },
        { title: 'Supervisor', path: '/supervisor' },
      ],
      home: {
        title: 'DISPATCH',
        text: '1 Deckhand Valid Drivers Licence 8hrs Larkspur Ferry Terminal 1/22/2021 Shift Hours 1300-2100',
      },
      about: {
        title: 'About Me',
      },
      contact: {
        title: 'Let\'s Connect',
      },
      supervisor: {
        title: 'Create a job',
      },
    };
  }
  render() {
    return (
      <Router>
        <Container className="p=5" fluid={true}>

          <Navbar className="border-bottom" bg="transparent" expand="lg">
            <Navbar.Brand>Augustino Przygocki</Navbar.Brand>

           <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
           <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/about">About</Link>
                <Link className="nav-link" to="/contact">Contact</Link>
                <Link className="nav-link" to="/supervisor">Supervisor</Link>
             </Nav>
            </Navbar.Collapse>
          </Navbar>
          
          <Route path="/" exact render={()=> <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} />} />

          <Route path="/about" render={()=> <AboutPage title={this.state.about.title} />} />

          <Route path="/contact" render={()=> <ContactPage title={this.state.contact.title} />} />

          <Route path="/supervisor" render={()=> <SupervisorPage title={this.state.supervisor.title} />} />
         
          <Footer/>

        </Container>
      </Router>
    );
  }  
}
export default App;