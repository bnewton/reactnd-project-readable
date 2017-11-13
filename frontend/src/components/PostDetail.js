import React, { Component } from 'react';
import * as PostsAPI from '../utils/PostsAPI'


class PostDetail extends Component {
    
    
    

    state = {
        categories: [],
        posts: []
    }


    
    componentDidMount() {
        PostsAPI.getPostById('8xf0y6ziyjabvozdd253nd').then((posts) => {
            this.setState({posts})
        })
    }

    render() {
        

        return(
            <div><h3>{this.state.posts.title}</h3></div>
        )
    }    
}

export default PostDetail