import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom'

export default class User extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: this.props.name
    };
  }

  render(){
    return (
      <div>
        <h1>Welcome! {this.state.name}</h1>
        </div>
    )
  }
}
