import React, { useState } from 'react'

const Form = (props) => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

  const trackName = (event) =>{
    setName(event.target.value);
  };

  const trackAddress = (event) => {
    setAddress(event.target.value);
  }

  const showData = (event)=> {
    event.preventDefault();

    const data = {
      name,
      address
    };

    props.addNewMember(data);
    setName("");
    setAddress("");
  }
  return (
    <form onSubmit={showData}>
      <input type="text" placeholder="name" onChange={trackName} value={name}/>
      <input type="text" placeholder="address" onChange={trackAddress} value={address}/>
      <button type="submit">Add new member</button>
    </form>
  )
}

export default Form


// 37:53