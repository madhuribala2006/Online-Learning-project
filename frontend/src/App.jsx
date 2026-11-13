import React, {useState} from 'react';
function App(){
  const[progress, setProgress] = useState(0);
  return(
    <div>
      <h1>Online Learning Platform</h1>
      <h2>Available courses</h2>
      <p>HTML-Web development</p>
      <p>React-frontend development</p>
      <h2>Enrollment</h2>
      <input id="Name" placeholder="Enter Name"/>
      <button onclick={()=>{
        const name = document.getElementById("Name").value;
        if(name===""){
          alert("Enter Name");
        }
        else{
          alert("Enrollment successful");
        }
      }}>Enroll</button>
      <h2>progress:{progress}%</h2>
      <progress value={progress} max="100"/>
      <button onClick={()=>{ setProgress(Math.min(100, progress+25)); }}>Update Progress</button>


    </div>
  );
}
export default App;