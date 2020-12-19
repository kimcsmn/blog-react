import React, { Component } from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter, Route} from 'react-router-dom'
import Home from './components/Home'
import Contact from './components/Contact'
import About from './components/About'

class App extends Component {

// https://jsonplaceholder.typicode.com/posts

  render(){
    return(
      <div>
        <BrowserRouter>
          <Navbar />
          <Route exact path="/">{Home}</Route>
          <Route path="/about">{About}</Route>
          <Route path="/contact">{Contact}</Route>
        </BrowserRouter>
      </div>
    )
  }
}

export default App
