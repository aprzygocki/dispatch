import React, {useState} from 'react';

function JobBoardPage (props) {
  const [value,setValue]=useState('')
  const handleSelect=(e)=>{
    console.log(e);
    setValue(e)
  }
return()