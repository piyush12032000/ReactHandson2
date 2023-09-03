import React, { Component } from "react";
 import "./Style.css";
class FormClass extends Component{
    state={
        Name:'',
        Department:'',
        Rating:'',
        EmpData:[]
    }
    changeHandle=(event)=>{
        this.setState({[event.target.name]:event.target.value})
        console.log(this.state.Rating)
    }
    clickHandle=()=>{
        const newObj={
            name:this.state.Name,
            Department:this.state.Department,
            rate:this.state.Rating
        }
        this.state.EmpData.push(newObj);
        this.setState({EmpData:this.state.EmpData,Name:" " ,Department: " ",Rating:" "})
        console.log(this.state.EmpData)
    }
    render(){
        return(
            <>
            <form>
            <label htmlFor='name'>Name:</label>
            <input id='name' type="'text" name='Name'value={this.state.Name}onChange={this.changeHandle}></input><br/><br/><br/>
            <label htmlFor='department'>Department:</label>
            <input id='department' type="'text" name='Department'value={this.state.Department}onChange={this.changeHandle}></input><br/><br/><br/>
            <label htmlFor='rate'>Rating:</label>
            <input id='rate' type="'text" name='Rating'value={this.state.Rating}onChange={this.changeHandle}></input><br/><br/><br/>
             <br/><br/><br/><br/>
            <button type='button'onClick={this.clickHandle}>Submit</button>
            </form>
​
         
             <div className="parent" >
            {this.state.EmpData.map((item,index)=>{
                return(
                <>
               
                <span>
                <div className ="box">
                     Name:{item.name}|| Department:{item.Department}|| Rating:{item.rate}
                     </div>
                    </span>
                     
                </>
                )
            })}
            </div>
            </>
        )
    }
}
export default FormClass;