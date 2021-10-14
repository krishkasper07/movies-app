import {React,Component} from "react";
import Input from "./common/input";
class LoginForm extends Component{
    
    state={
           account:{username:'',password:''},
           errors:{}
    }
    
     validate=()=>{
         const {account}=this.state;
        const error={}
        if(account.username.trim()==='')
        error.username='username  is required'
        if(account.password.trim() ==='')
        error.password='password is required'
        console.log(Object.keys.length);
        return Object.keys.length===0 ? null : error;
    }

     handleSubmit=(e)=>{
        e.preventDefault();
        const errors=this.validate();
        console.log(errors);
        this.setState({errors});
        if(errors) return;
        console.log('submitted');
    }

     handleChange=({target})=>{
        const {account}=this.state;
        const newAccount={...account}
        newAccount[target.name]=target.value;
       this.setState({account:newAccount});
    }
    render(){
        const {account}=this.state;
    return (<div> <h1>LOgin</h1>
    <form onSubmit={this.handleSubmit}>
        <Input 
        name='username'
        label='Username'
        value={account.username}
        onChange={this.handleChange} autoFocus='autoFocus'/>
       <Input 
        name='password'
        label='Password'
        value={account.password}
        onChange={this.handleChange}/>
  <button type="submit" className="btn btn-primary">Login</button>
</form>
        </div> );
}
}
 
export default LoginForm;