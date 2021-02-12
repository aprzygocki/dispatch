import React, { useState } from 'react';

// import './App.css';

const Checkbox = () => {
  const [agree, setAgree] = useState(false);

  const checkboxHandler = () => {
    // if agree === true, it will be set to false
    // if agree === false, it will be set to true
    setAgree(!agree);
    // Don't miss the exclamation mark
  }

  // // When the button is clicked
  // const btnHandler = () => {
  //   alert('The buttion is clickable!');
  // };

  return (
    <div className="Checkbox">
      <div className="container">
        <div>
          <input type="checkbox" id="agree" onChange={checkboxHandler} />
          <label htmlFor="agree">
          &nbsp;I agree to the
          </label>
          <div>
           <a href="https://vesselmasters.com/terms-of-service/"className="link">Terms of Services </a>and <a href="https://vesselmasters.com/privacy-policy/">Privacy Policy.</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkbox;