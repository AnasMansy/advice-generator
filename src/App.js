import axios from 'axios';
import React, { Component } from 'react'

import './App.css';
export default class App extends Component {


 
  state = {
        advice:'want advice !'
        
    }
 
 
fetchAdvices() {
  axios.get('	https://api.adviceslip.com/advice')
  .then((Response)=>{
    const { advice }=Response.data.slip ; 
    this.setState({advice:advice});
  })
  .catch((Error)=>{ 
    console.log( Error );
  })
}

  render() {
    return (
      <div className='app'>
      <div className='card'>
        <h1 className='title'> {this.state.advice}</h1>
        <button className='btn'onClick={() => this.fetchAdvices()}> 
          give me advice
         
        </button>
      </div>
      </div>
    )
  }
}
