import React, { Component } from 'react'
import axios from 'axios'

class Home extends Component {
  componentDidMount(){
   // when this mount on the DOM I want to fetch data
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        console.log(res)
      })
  }

  render(){
    return(
      <div>
        <p>hello</p>
      </div>
    )
  }
}

export default Home
