import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom'

export default class Home extends Component {

  render(){
    return (
      <div>
        <a href="/register">Register </a>
      </div>
      );
  }
}
