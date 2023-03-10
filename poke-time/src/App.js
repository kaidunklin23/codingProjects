import React, {Component} from 'react';

// this import allows us to use Routes in React
// routes render components based off of the URL

import {BrowserRouter, Route, Switch} from 'react-router-dom';

// import components

import Navbar from './components/Navbar';

import Home from './components/Home';

import About from  './components/About';

import Contact from './components/Contact';

import Post from './components/Post'


class App extends Component{

  render() {



    return (

      <BrowserRouter>

        <div className='App'>

          <Navbar />

          <Switch>
            <Route exact path='/' component={Home}/>

            <Route path='/About' component={About}/>

            <Route path='/Contact' component={Contact}/>

            <Route path='/:post_id' component={Post}/>
          </Switch>

          

        </div>

      </BrowserRouter>
    )
  }
}
export default App;