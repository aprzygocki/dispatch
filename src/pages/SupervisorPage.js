// import { React, useState } from 'react';
import { Dropdown, Menu } from 'semantic-ui-react';
// import ReactDOM from 'react-dom';
// import DropdownButton from 'react-bootstrap/DropdownButton';
import Button from 'react-bootstrap/Button';
// import SplitButton from 'react-bootstrap/SplitButton';
// import ToggleButton from 'react-bootstrap/ToggleButton';
// import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
// import { createPopper } from '@popperjs/core';

// function SupervisorPage(props) {
  class SupervisorPage extends React.Component {

    constructor(props)
  <Dropdown as={ButtonGroup}>
    <Dropdown.Toggle id="dropdown-custom-1">Pow! Zoom!</Dropdown.Toggle>
    <Dropdown.Menu className="super-colors">
      <Dropdown.Item eventKey="1">Action</Dropdown.Item>
      <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
      <Dropdown.Item eventKey="3" active>
        Active Item
      </Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>{' '}
  <Dropdown as={ButtonGroup}>
    <Button variant="info">mix it up style-wise</Button>
    <Dropdown.Toggle split variant="success" id="dropdown-custom-2" />
    <Dropdown.Menu className="super-colors">
      <Dropdown.Item eventKey="1">Action</Dropdown.Item>
      <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
      <Dropdown.Item eventKey="3" active>
        Active Item
      </Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>

export default SupervisorPage;