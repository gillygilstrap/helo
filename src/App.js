import React, { Component } from 'react';
import './App.css';
import { loopback } from 'ip';
import Nav from './components/Nav/Nav'
import routes from './routes';
import { withRouter } from 'react-router'

class App extends Component {
  constructor(props) {
    super();
  }
  
  render() {
    // console.log(this.props)
    return (
      <div className="app">
        <Nav pathName={this.props.location.pathname}/>
        {routes}
      </div>
    );
  }
}

export default withRouter(App);



