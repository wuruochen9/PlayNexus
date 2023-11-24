import React from 'react';
import { Dropdown, Image } from 'react-bootstrap';

function APP() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="light" id="dropdown-basic">
        <Image src="path/to/profile-picture.jpg" roundedCircle />
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Add profile</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Your repositories</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Your organizations</Dropdown.Item>
        <Dropdown.Item href="#/action-4">Your enterprises</Dropdown.Item>
        <Dropdown.Item href="#/action-5">Your sponsors</Dropdown.Item>
        <Dropdown.Item href="#/action-6">Try Enterprise</Dropdown.Item>
        <Dropdown.Item href="#/action-7">Upgrade</Dropdown.Item>
        <Dropdown.Item href="#/action-8">Logout</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
export default APP;