import React from 'react';
import { BrowserRouter as Router,Route } from 'react-router-dom';
import About from './components/About'
import HomeContainer from './Containers/HomeContainer';
import Navbar from './components/Navbar'
import UserDetail from './components/UserDetail';

const Routings= ()=>{
    return (
       
   <React.Fragment>
             <Router>
                <Route exact path='/'>
                    <HomeContainer/>
                </Route> 
               
                <Route path='/About'>
                    <Navbar></Navbar>
                    <About/>
                </Route>
                <Route path='/user/:user' >
                    <Navbar></Navbar>   
                    <UserDetail/>
                </Route>
            </Router>
    </React.Fragment>

        
    )
}

export default  Routings;