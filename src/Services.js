import React, {useState,useEffect} from 'react';



export default function Services(){
    const[add,setAdd]= useState(0);
    const[minus,setMinus]= useState(100);
    useEffect(()=>{

        console.log("use of huuk")
    } , [add])

    return(
        <div style={{backgroundColor:"pink"}} className='container'>
            <div style={{textAlign:"center",marginTop:"150px"}} className='row'>
                <div  className='col-6'>
            <h1 style={{color:"grey"}} >{add}</h1>
            <button style={{color:"grey"}} onClick={()=>{setAdd(add+1)}}>Increment</button>
            </div>
            <div className='col-6'>

            <h1 style={{color:"grey"}}>{minus}</h1>
            <button style={{color:"grey"}}  onClick={()=>{setMinus(minus-1)}}>Decrement</button>
            </div>
        </div>
        </div>
    )}