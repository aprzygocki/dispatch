import { React, useState } from 'react';
import { Dropdown, Menu } from 'semantic-ui-react'
import ReactDOM from 'react-dom';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { Button } from 'react-bootstrap';
import SplitButton from 'react-bootstrap/SplitButton';

function SupervisorPage(props){
  return(
<>
  {['Primary', 'Secondary', 'Success', 'Info', 'Warning', 'Danger'].map(
    (variant) => (
      <SplitButton
        key={variant}
        id={`dropdown-split-variants-${variant}`}
        variant={variant.toLowerCase()}
        title={variant}
      >
        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
        <Dropdown.Item eventKey="3" active>
          Active Item
        </Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
      </SplitButton>
    ),
  )}
</>
  )
  }
export default SupervisorPage;