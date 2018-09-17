import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom'
import AuthService from '../services'

export default class User extends Component {
  constructor(props){
    super(props);
    let auth = new AuthService();
    this.state = {
      token: auth.getToken()
    };
  }

  render(){
    console.log(this.props, this.state);
    return (
      <div>
        <h1>Welcome! {this.state.token}</h1>
        </div>
    )
  }
}
