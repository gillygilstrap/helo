import React, { Component } from 'react'
import './auth.css'
import axios from 'axios';
import {Link} from 'react-router-dom'
import { connect } from "react-redux";
import { currentUser } from '../../ducks/reducer';

 class Auth extends Component {
   constructor() {
     super()
     this.state = {
       username: '',
       password: '',
       picture: "https://robohash.org/A1O.png?set=set1&size=150x150"
     }
     this.handleUsernameChange =  this.handleUsernameChange.bind(this);
     this.handlePasswordChange =  this.handlePasswordChange.bind(this);
     this.register =  this.register.bind(this);
     this.login =  this.login.bind(this);
   }
   
   handleUsernameChange(e){
     this.setState({
       username: e.target.value
     })
   }

   handlePasswordChange(e){
     this.setState({
       password: e.target.value
     })
   }

   register() {
     const {username, password, picture} = this.state;
     axios.post('/user', {username: username, password: password, picture: picture}).then(res => {
      const {id, username, profile_pic} = res.data
      this.props.currentUser(id, username, profile_pic)
     })
     this.setState({
       username: '',
       password:''
     })
   }

   login() {
     const {username, password} = this.state
    axios.post('/user/login', {username: username, password: password}).then( res => {
      const {id, username, profile_pic} = res.data
      // console.log(profile_pic)
      this.props.currentUser(id, username, profile_pic)
    })
    this.setState({
      username: '',
      password:''
    })
   }
    
  render() {
    return (
      <div className="auth-main">
        <div className="auth-card">
           <i className="far fa-smile-wink"></i>

           <h1>Helo</h1>

           <div className="input-group">
              <h3>Username:</h3>
              <input onChange={this.handleUsernameChange} value={this.state.username} type="text"/>
           </div>

           <div className="input-group">
              <h3>Password:</h3>
              <input onChange={this.handlePasswordChange} value={this.state.password} type="password"/>
           </div>

           <div className="btns">
              <Link to ="/dashboard"><button onClick={this.login}>Login</button></Link>
              <Link to ="/dashboard"><button onClick={this.register}>Register</button></Link>
           </div>

        </div>
      </div>
    )
  }
}

export default connect(null, {currentUser})(Auth);
          

 