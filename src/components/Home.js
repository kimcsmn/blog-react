import React, { Component } from 'react'
import axios from 'axios'

class Home extends Component {
  // create state to store post from json server
  state = {
    posts: []
  }

  componentDidMount(){
    // when react mount to the DOM, fetch this data
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        console.log(res)
        this.setState({
          posts: res.data.slice(0,10)
        })
      })
  }

  render(){
    // check if post is not empty then render it
    const { posts } = this.state
    const postList = posts.length ? (
      posts.map(post => {
        return(
          <div className="todo">
            <h3 className="todo-title">{post.title}</h3>
            <p className="todo-body">{post.body}</p>
          </div>
        )
      })
    ) : (
      <p>empty list</p>
    )
    return(
      <div>
        {postList}
      </div>
    )
  }
}

export default Home
