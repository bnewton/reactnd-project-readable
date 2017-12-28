import React, { Component } from 'react';
import * as PostsAPI from '../utils/PostsAPI'
import moment from 'moment'

class PostDetail extends Component {
    
    state = {
        comments: [],
        posts: []
    }

    componentDidMount() {
        PostsAPI.getPostById(this.props.posts.match.params.id).then((posts) => {
            this.setState({posts})
        })

        PostsAPI.getAllCommentsForPost(this.props.posts.match.params.id).then((comments) => {
            this.setState({comments})
        })
    }

    render() {        
        return(
            <div>
                <div>
                    <h3>{this.state.posts.title}</h3>
                    <p className="postDetails"> by {this.state.posts.author} on {moment(this.state.posts.timestamp).startOf('hour').fromNow()} | {this.state.posts.voteScore} votes | category: {this.state.posts.category} | {this.state.posts.commentCount} comments</p>
                    <p>{this.state.posts.body}</p>
                </div>
                
                <div>
                </div>

                <hr/>
                <form>
                <div className="form-group">
                <label for="exampleFormControlTextarea1"></label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                
                <button type="submit" class="btn btn-primary">add comment</button>
                </form>
                <hr/>

                <div>
                {this.state.comments.map((comments) => (
                    <div>
                        <span className="commentDetails">{comments.author} {moment(comments.timestamp).startOf('hour').fromNow()}</span>
                        <p className="commentBody">{comments.body}</p>
                     </div>   
                ))}    
                </div>
            </div>    
        )
    }    
}

export default PostDetail