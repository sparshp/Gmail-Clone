import { Checkbox , IconButton} from '@material-ui/core'

import React, { useState,useEffect } from 'react'
import RedoIcon from '@material-ui/icons/Redo';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import './EmailList.css'
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import SettingsIcon from '@material-ui/icons/Settings';
import KeyboardHideIcon from '@material-ui/icons/KeyboardHide';
import Section from './Section';
import InboxIcon from '@material-ui/icons/Inbox';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import GroupIcon from '@material-ui/icons/Group';
import EmailRow from './EmailRow';
import { db } from './firebase';


function EmailList() {
  const [emails,setEmail] =useState([]);

  useEffect(() => {
    db.collection('emails').orderBy('timestamp','desc').onSnapshot(snapshot =>setEmail(snapshot.docs.map(doc => ({
      id: doc.id,
      data: doc.data(),
    }))))
  }, [])
    return (
        <div className="emailList">
            <div className="emailList__settings">
               <div className="emailList__settingLeft">
                 <Checkbox />
                 <IconButton>
                  <ArrowDropDownIcon />
                 </IconButton>
                 <IconButton>
                  <RedoIcon />
                 </IconButton>
                 <IconButton>
                  <MoreVertIcon />
                 </IconButton>
               </div>
                 <div className="emailList__settingRight">
                 <IconButton>
                  <ChevronLeftIcon />
                 </IconButton>
                 <IconButton>
                  <ChevronRightIcon />
                 </IconButton>
                 <IconButton>
                  <KeyboardHideIcon />
                 </IconButton>
                 <IconButton>
                  <SettingsIcon />
                 </IconButton>
                 </div>
            </div>
            <div className="emailList__sections">
                 <Section Icon={InboxIcon} title='Primary' color='red' selected />
                 <Section Icon={GroupIcon} title='Social' color='#1A73E8' />
                 <Section Icon={LocalOfferIcon} title='Promotions' color='green' />
            </div>
            <div className="emailList__list">
            {emails.map(({id,data:{to ,subject,message,timestamp}}) =>(
              <EmailRow
                id={id}
                key={id}
                title={to}
                subject={subject}
                description={message}
                time={new Date(timestamp?.seconds*1000).toUTCString()}
              
              />
            ))}
           

            </div>
        </div>
    )
}

export default EmailList
