import React, { Component } from 'react';
import * as PostsAPI from '../utils/PostsAPI'
import { Link } from 'react-router-dom'

class Index extends Component {

    state = {
        categories: [],
        posts: []
    }

    componentDidMount() {
        PostsAPI.getAll().then((posts) => {
            this.setState({posts})
        })
    }

    render() {
        return(
            <div>
            {this.state.posts.map((posts) => (
               <div key={posts.id} className="">
              <h5><Link className="postsTitle" to={`/posts/${posts.id}`}> {posts.title} <span className="sr-only">(current)</span></Link></h5>
              <p className="postDetails"> {posts.voteScore} votes | category: {posts.category} | {posts.commentCount} comments</p>
              </div>
            ))}     
            </div>
        )
    }    
}

export default Index