import React from 'react';
import '../scss/components/_header.scss';
import logo from '../assets/img/logo.png';
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Avatar } from '@material-ui/core';

function Header() {
  return (
    <div className='header'>
      <img className='header_icon' src={logo} alt='Logo' />
      <div className='header_center'>
        <input type='text' />
        <SearchIcon />
      </div>
      <div className='header_right'>
        <p>Become a host</p>
        <LanguageIcon />
        <ExpandMoreIcon />
        <Avatar />
      </div>
    </div>
  );
}

export default Header;
