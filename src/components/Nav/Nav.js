import React, { Component } from 'react'
import {withRouter} from 'react-router-dom';
import {Link} from 'react-router-dom';
import './nav.css'
import { connect } from 'react-redux';

function Nav(props){
console.log("------------------------------------",props)
    if (props.pathName === '/'){
    return (
            <div>
            </div>
    )
    }else {
        return (
            <div className="navbar">
                <img src={props.picture}/>
                <p>{props.username}</p>
                <div className="icons">
                    <Link to="/dashboard"><i className="home" className="fas fa-home"></i></Link>
                    <Link to="/post/:postid"><i className="post" className="far fa-newspaper"></i></Link>
                    <Link to="/"><i className="fas fa-power-off"></i></Link>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    const {username, picture} = state
    return {
        username, 
        picture
    }
}

export default connect(mapStateToProps)(Nav);
