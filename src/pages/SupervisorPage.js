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
</>
)
    }
export default SupervisorPage;