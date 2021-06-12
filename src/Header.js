import React from 'react'
import './Header.css';
import { Button } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { Avatar, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { logout, selectUser } from './features/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from './firebase';

function Header() {
  const user =useSelector(selectUser);
  const dispatch = useDispatch();

  const signOut=() =>{
     auth.signOut().then(() =>{
      dispatch(logout());
     })
  };

    return (
        <div className='header'>
            <div className='header__left'>
              <IconButton>
               <MenuIcon />
              </IconButton>
              <img src='https://cdn.vox-cdn.com/thumbor/K-q2WRPRyxxzzPLjxHGt26swMfM=/0x0:1320x880/1200x800/filters:focal(555x335:765x545)/cdn.vox-cdn.com/uploads/chorus_image/image/67587450/newgmaillogo.0.jpg' alt='#' />
            </div>
            <div className='header__middle'>
            <SearchIcon />
            <input placeholder='Search mail' type='text' />
            <ArrowDropDownIcon className='header__inputCard' />
            </div>
            <div className='header__right'>
            <IconButton>
             <AppsIcon />
            </IconButton>
            <IconButton>
              <NotificationsIcon />
            </IconButton>
            <Avatar  src={user?.photoURL}/>
             <Button onClick={signOut}>exit</Button>
            </div>
        </div>
    )
}

export default Header
