import One from './components/One/One'
import Students from './components/One/Students';
import Background from './components/One/Background';
import Form from './components/One/Form';
import { useState } from 'react';


function App() {
  const name = "Min Khant";
  const [students,setStudents] = useState([])

  const obj = {
    name: "Min Khant",
    age : "23",
    address : "Hlaing"
  }

  const addNewMember = (memInfo) => {
    // console.log(memInfo);
    setStudents([...students,memInfo]);
  }

  let contentSection = <p>No member yet!</p>;
  
  if(!students.length < 1){
    contentSection = students.map((student) =>(
      <Students name={student.name} address={student.address} key={student.name}/>
    ));
  }

  return (
      <div className="App">
        {/* day 7 */}
        <section>
          {/* {
            students.length < 1 ? (<p>No member yet!</p>) : (students.map((student) =>(
              <Students name={student.name} address={student.address} key={student.name}/>
            )))
          } */}
          {contentSection};
        </section>
          <Form addNewMember = {addNewMember}/>
      </div>
  );
}

export default App;
