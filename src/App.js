import React,{useState} from 'react';// using function components
function App(x){
const[data, setData] = useState(0)
return(

    <div >
      <img style={{border:"2px solid red",borderRadius:"50%", height:"250px",width:"250px"}} src="https://images.unsplash.com/photo-1612144431180-2d672779556c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c21hbGwlMjBzaXplfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60" alt="blank"></img>&nbsp;&nbsp;&nbsp;&nbsp;

      <img style={{border:"2px solid yellow",borderRadius:"50%", height:"250px",width:"250px"}} src="https://i.ytimg.com/vi/E9iP8jdtYZ0/sddefault.jpg?v=6395c73d" alt="blank">
      </img> 


      <h1 style={{color:"blue"}}>{x.name}:{data}</h1>
      <button onClick={()=>{setData(data+1)}}>click me</button>
    
    </div>
  );
}
export default App;
