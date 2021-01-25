import React from 'react';

import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {
  BrowserRouter,
  Redirect,
  Link,
  Route,
  Switch,
} from 'react-router-dom';
import Header from "./components/navbar/navbar.components";
import Projects from './pages/academics/Projects/projects.components'
import Hobbies from './pages/academics/Hobbies/hobies.component'
import Homepage from './pages/academics/homepage/homepage.component';
import Academics  from './pages/academics/academics.component'
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Header></Header>
    <div className="App">
    <Switch>
       
        <Route exact path='/' component={Homepage}></Route>
    </Switch>
    <Switch>
       
        <Route path='/Academics' component={Academics}></Route>
    </Switch>
    <Switch>
       <div className='project'>
            <Route path='/Projects' component={Projects}></Route>
             </div>
    </Switch>
    <Switch>
        <div className='container'>
          
          <Route  path='/Hobbies' component={Hobbies}></Route></div>
        
    </Switch>
    </div>
    </BrowserRouter>
    
  );
}

export default App;
