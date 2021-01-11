import { React } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { Dropdown } from 'react-bootstrap';
// import { Dropdown } from 'semantic-ui-react';
// import ReactDOM from 'react-dom';
// import { createPopper } from '@popperjs/core';
// import DropdownButton from 'react-bootstrap/DropdownButton';
// import SplitButton from 'react-bootstrap/SplitButton';
// import ToggleButton from 'react-bootstrap/ToggleButton';
// import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';


function SupervisorPage (props) {
return(
<>
  <Dropdown as={ButtonGroup}>
    <Dropdown.Toggle variant="primary" id="quantity">Quantity</Dropdown.Toggle>
    <Dropdown.Menu className="super-colors">
        <Dropdown.Item eventKey="1">1</Dropdown.Item>
        <Dropdown.Item eventKey="2">2</Dropdown.Item>
        <Dropdown.Item eventKey="3">3</Dropdown.Item>
      <Dropdown.Divider />
        <Dropdown.Item eventKey="4">4</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>{' '}
  <Dropdown as={ButtonGroup}>
    <Dropdown.Toggle variant="danger" id="position">Position</Dropdown.Toggle>
    <Dropdown.Menu className="super-colors">
        <Dropdown.Item eventKey="1">Deckhand</Dropdown.Item>
        <Dropdown.Item eventKey="2">Terminal Attendant</Dropdown.Item>
        <Dropdown.Item eventKey="3">Vessel Master</Dropdown.Item>
      <Dropdown.Divider />
        <Dropdown.Item eventKey="4">Supervisor</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
  <Dropdown as={ButtonGroup}>
    <Dropdown.Toggle variant="warning" id="qualifications">Qualifications</Dropdown.Toggle>
    <Dropdown.Menu className="super-colors">
        <Dropdown.Item eventKey="1">Valid Driver's Licence</Dropdown.Item>
        <Dropdown.Item eventKey="2">Respirator Qualified</Dropdown.Item>
        <Dropdown.Item eventKey="3">Ramp Qualified</Dropdown.Item>
      <Dropdown.Divider />
        <Dropdown.Item eventKey="4">Lead</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
  <Dropdown as={ButtonGroup}>
    <Dropdown.Toggle variant="primary" id="qualifications">Duration</Dropdown.Toggle>
      <Dropdown.Menu className="super-colors">
        <Dropdown.Item eventKey="1">8 Hours</Dropdown.Item>
        <Dropdown.Item eventKey="2">16 Hours</Dropdown.Item>
        <Dropdown.Item eventKey="3">24 Hours</Dropdown.Item>
        <Dropdown.Item eventKey="4">36 Hours</Dropdown.Item>
      <Dropdown.Divider />
        <Dropdown.Item eventKey="5">40+ Hours</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
  <Dropdown as={ButtonGroup}>
    <Dropdown.Toggle variant="success" id="location">Location</Dropdown.Toggle>
    <Dropdown.Menu className="super-colors">
        <Dropdown.Item eventKey="1">Larkspur Ferry Terminal</Dropdown.Item>
        <Dropdown.Item eventKey="2">San Francisco Ferry Terminal</Dropdown.Item>
        <Dropdown.Item eventKey="3">Sausalito</Dropdown.Item>
        <Dropdown.Item eventKey="4">AT&T</Dropdown.Item>
      <Dropdown.Divider />
        <Dropdown.Item eventKey="5">Call Supervisor for Location Start</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
</>
)
    }
export default SupervisorPage;