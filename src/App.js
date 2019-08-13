import React, { Component } from 'react';
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from './contact'
import Home from './home'
import Footer from './footer'
import Navigation from './navbar'


export default class App extends React.Component {

  render() {
    return (
      <div>
       
                <Navigation></Navigation>
                <Contact></Contact> 
                <Home></Home>  
                <Footer></Footer>       
                
                                                                                                                                                     
            </div>
        );
    }
}
