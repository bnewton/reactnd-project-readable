import React, { Component } from 'react';
import * as CategoriesAPI from '../utils/CategoriesAPI'
import { Link } from 'react-router-dom'


class Index extends Component {

    state = {
        categories: []
    }

    componentDidMount() {
        CategoriesAPI.getAll().then((categories) => {
            this.setState({categories})
        })
    }

    render() {

        console.log(this.state.categories);
        
        return(
            <div>
            {this.state.categories.map((category) => (
                <p key={category.path}><Link to={`${category.path}/posts`}>{category.name}</Link></p>
            ))}
            </div>
        )
    }    
}

export default Index