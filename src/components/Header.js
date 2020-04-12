import React, { Component } from 'react';
import profile from '../assets/profile.png';

class Header extends Component {
  render(){
    return(
    <img src={profile} />
    );
  }  
}

export default Header;