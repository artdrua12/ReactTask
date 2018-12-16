 import React, {Component} from 'react'

 class RegistrationForm extends Component {
     constructor(props){
         super(props);
         this.state = {
             email: ""
         }
         this.onSubmit = this.onSubmit.bind(this);
         this.handleonChange = this.handleonChange.bind(this);    
     }

     onSubmit(event){
         event.preventDefault();
         console.log("submit");
     }
     handleonChange(event){
         this.setState({email: event.target.value})
     }

     render(){
         return(
            <form onSubmit={this.onSubmit}>
            <input 
            type="text"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleonChange}
            className="emailFild"
            ></input>
            <button className="submitBtn">Save</button>
            </form>
         )
     }
 }

 export default RegistrationForm