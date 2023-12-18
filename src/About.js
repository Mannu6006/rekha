import React from 'react';  // class components 
class About extends React.Component{
    constructor(){
        super();
        this.state={
            count:0
        }
    }
    setUpdate(){
        this.setState({
            count:this.state.count + 1
        })
    }
    render(){
        return (
         <>
         <h1>{this.props.name}</h1>
         <h1>{this.state.count} </h1>
            <button onClick={()=>{this.setUpdate()}}>update</button>
            </>
   
        )
    }
}
export default About;