import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Index from './components/Index'
import Navbar from './components/Navbar'
import Category from './components/Category'
import PostDetail from './components/PostDetail'




class App extends Component {
  render() {
    return (
      <div>
          <Navbar/>

        <div className="app">
          <div className="container">
              <Route exact path="/" render={() => (
                <Index/>
              )}/>

              <Route exact path="/category" render={() => (
                <Category/>
              )}/>

              <Route exact path="/posts/:id" render={() => (
                <PostDetail/>
              )}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
