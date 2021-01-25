import React from 'react';
import {
  BrowserRouter,
  
  Link,
  Route,
  Switch,
} from 'react-router-dom';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';


import './navbar.scss'


const Header =()=>(
    <div className='header'>
        
        <div className='options'>
        <Link className='option' to='/'>
            Home
        </Link>
        <Link className='option' to='/Academics'>
            Academics
        </Link>
        <Link className='option' to='/Projects'>
            Projects
        </Link>
        <Link className='option' to='/Hobbies'>
            Hobbies
        </Link>
       
        </div>
    </div>
)

export default Header;