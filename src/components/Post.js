import React, { Component } from 'react'
import axios from 'axios'

class Post extends Component {
  state = ({
    post: null
  })

  componentDidMount(){
    let id = this.props.match.params.post_id;
    axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
    .then((res) => {
      this.setState({
        post: res.data
      })
      })

    }

    render(){
    const post = this.state.post ? (
      <div className="post">
        <h3 className="post-title">{this.state.post.title}</h3>
        <p className="post-body">{this.state.post.body}</p>
      </div>
    ) : (
      <div>Loading post...</div>
    )

    return(
      <div>
        {post}
      </div>
    )
  }
}

export default Post
