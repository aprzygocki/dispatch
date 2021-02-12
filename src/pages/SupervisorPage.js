import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { saveJob } from "./jobSlice";
// import { setJobUI } from "./jobSlice";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { Dropdown } from "react-bootstrap";
import "react-day-picker/lib/style.css";
import Calendar from "../components/Calendar";
// import Hero from "../components/Hero";
// import { use } from "../routes/apiRoutes/index";
// import {createSlice} from '@reduxjs/toolkit';
// import { useSelector } from 'react-redux'

// import Button from 'react-bootstrap/Button';
// import ReactDOM from 'react-dom';
// import DropdownButton from 'react-bootstrap/DropdownButton';
// import DayPicker from 'react-day-picker';
// import SplitButton from 'react-bootstrap/SplitButton';
// import ToggleButton from 'react-bootstrap/ToggleButton';
// import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';

const initialValues = {
  quantity: "", 
  position: "", 
  qualifications: "", 
  duration: "", 
  location: "",
};

function SupervisorPage(props) {
  // const dispatch = useDispatch()
  const [value, setValue] = useState(initialValues);
  
  const handleSelect = (e) => {
    console.log(e);
    const { name, value } = e.target;
    setValue({
      ...value,
      [name]: value,
    });
  };
  return (
    <>
      <div class="justify-content-left">
        {/* <Hero title={props.title} /> */}
        <h1>Supervisor</h1>
        {/* We can toggle between these two styles of 
    Supervisor. Un-comment line 28 or 29 and comment in 
    whichever is preffered */}
        <h4>Create a job using the dropdown menus below</h4>
        <hr />
        <Dropdown as={ButtonGroup} onSelect={handleSelect}>
          <Dropdown.Toggle variant="primary" id="quantity">
            Quantity
          </Dropdown.Toggle>
          <Dropdown.Menu className="super-colors">
            <Dropdown.Item eventKey="1">1</Dropdown.Item>
            <Dropdown.Item eventKey="2">2</Dropdown.Item>
            <Dropdown.Item eventKey="3">3</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item eventKey="4">4</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>{" "}
        <Dropdown as={ButtonGroup} onSelect={handleSelect}>
          <Dropdown.Toggle variant="danger" id="position">
            Position
          </Dropdown.Toggle>
          <Dropdown.Menu className="super-colors">
            <Dropdown.Item eventKey="Deckhand">Deckhand</Dropdown.Item>
            <Dropdown.Item eventKey="Terminal Attendant">
              Terminal Attendant
            </Dropdown.Item>
            <Dropdown.Item eventKey="Vessel Master">
              Vessel Master
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item eventKey="Supervisor">Supervisor</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown as={ButtonGroup} onSelect={handleSelect}>
          <Dropdown.Toggle variant="warning" id="qualifications">
            Qualifications
          </Dropdown.Toggle>
          <Dropdown.Menu className="super-colors">
            <Dropdown.Item eventKey="Valid Driver's Licence">
              Valid Driver's Licence
            </Dropdown.Item>
            <Dropdown.Item eventKey="Respirator Qualified">
              Respirator Qualified
            </Dropdown.Item>
            <Dropdown.Item eventKey="Ramp Qualified">
              Ramp Qualified
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item eventKey="Lead">Lead</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown as={ButtonGroup} onSelect={handleSelect}>
          <Dropdown.Toggle variant="primary" id="duration">
            Duration
          </Dropdown.Toggle>
          <Dropdown.Menu className="super-colors">
            <Dropdown.Item eventKey="8 Hours">8 Hours</Dropdown.Item>
            <Dropdown.Item eventKey="16 Hours">16 Hours</Dropdown.Item>
            <Dropdown.Item eventKey="24 Hours">24 Hours</Dropdown.Item>
            <Dropdown.Item eventKey="36 Hours">36 Hours</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item eventKey="40+ Hours">40+ Hours</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown as={ButtonGroup} onSelect={handleSelect}>
          <Dropdown.Toggle variant="success" id="location">
            Location
          </Dropdown.Toggle>
          <Dropdown.Menu className="super-colors">
            <Dropdown.Item eventKey="Larkspur Ferry Terminal">
              Larkspur Ferry Terminal
            </Dropdown.Item>
            <Dropdown.Item eventKey="San Francisco Ferry Terminal">
              San Francisco Ferry Terminal
            </Dropdown.Item>
            <Dropdown.Item eventKey="Sausalito">Sausalito</Dropdown.Item>
            <Dropdown.Item eventKey="AT&T">AT&T</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item eventKey="Call Supervisor for Location Start">
              Call Supervisor for Location Start
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown as={ButtonGroup} onSelect={handleSelect}>
          <Dropdown.Toggle variant="danger" id="start_date">
            Start Date
          </Dropdown.Toggle>
          <Dropdown.Menu className="super-colors">
            <Calendar />
          </Dropdown.Menu>
        </Dropdown>
      </div>

      <div>You selected {value}</div>
    </>
  );
}
export default SupervisorPage;
