import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { loopback } from 'ip';
import Nav from './components/Nav/Nav'
import Post from './components/Post/Post'
import Dashboard from './components/Dashboard/Dashboard'
import Auth from './components/Auth/Auth'
import Form from './components/Form/Form'

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Nav />
        <Auth />
        <Dashboard />
        <Form />
        <Post />
      </div>
    );
  }
}

export default App;



