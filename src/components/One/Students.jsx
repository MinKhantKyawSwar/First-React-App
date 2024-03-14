import { useState } from "react";

function Students(props) {
  // variables

  //use state hook
  const [name, setName] = useState(props.name);
  const [address, setAddress] = useState(props.address);


  //alert function
  // const showAlert = () =>{
  //   alert("Hello world")
  // }
  // const changeName = () =>{
  //   setName("Name is updated")
  // }

  return (
    <>
      {/* day one */}
        {/* <ul>
          <li>Name : {name}</li>
          <li>Address : {address}</li>
          <button onClick={showAlert}>
            alert</button>
          <button onClick = {()=>{alert("Hi")}}>Hello</button>
          <button onClick = {changeName}>Change Name</button>
        </ul> */}
      <section>
          <div className="box">
            <p>name: {name}</p>
            <p>address: {address}</p>
          </div>
      </section>
    </>
  )
}

export default Students