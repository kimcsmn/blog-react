import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

class Home extends Component {
  // create state to store post from json server
  state = {
    posts: []
  }

  componentDidMount(){
    // when react mount to the DOM, fetch this data
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        // console.log(res.data)
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

          <div className="post" key={post.id} >
          <Link to={'/' + post.id}>
            <h3 className="post-title">{post.title}</h3>
          </Link>
            <p className="post-body">{post.body}</p>
            {post.id}
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
