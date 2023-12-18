import React, {useState,useMemo} from 'react';
function Usememo(){
    const [add,setAdd]=useState(0);
    const[minus, setMinus]= useState(100);
    const multilpy = useMemo(function multilpy(){
        console.log("this is a multiple function")
        return add*10;
    } ,[add])
    return(
        <div>
            <h1>{multilpy}</h1>
            <h1>{add}</h1>
            <button onClick={()=>{setAdd(add+1)}}>Add</button>
            
            <h1>{minus}</h1>
            <button onClick={()=>{setMinus(minus-1)}}>Minus</button>


        </div>
    )
}
    


export default Usememo