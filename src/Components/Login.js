import React, { Component } from "react";

export default class Sample extends Component{
  constructor(props) {
    super(props)
    this.state = {
      name: "Initial Name"
    }
  }

   //function which is called the first time the component loads
   componentDidMount() {
    this.setState({name:"User1"})
  }

  render() {
    return <h1>{this.state.name}</h1>
  }
} 
