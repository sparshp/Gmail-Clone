import React from 'react'
import "./Sidebar.css";
import AddIcon from '@material-ui/icons/Add'
import {Button, IconButton} from "@material-ui/core"
import InboxIcon from '@material-ui/icons/Inbox'
import SidebarOption from './SidebarOption';
import StarIcon from '@material-ui/icons/Star';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import SendIcon from '@material-ui/icons/Send';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import ErrorIcon from '@material-ui/icons/Error';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PersonIcon from '@material-ui/icons/Person';
import DuoIcon from '@material-ui/icons/Duo';
import PhoneIcon from '@material-ui/icons/Phone';
import {useDispatch} from "react-redux";
import { openSendMessage } from './features/mailSlice';



function Sidebar() {
  const dispatch = useDispatch();
    return (
        <div className="sidebar">
        <Button className="sidebar__compose" startIcon={<AddIcon fontsize="large" />}
        onClick={() =>dispatch(openSendMessage())}
        >
          Compose
        </Button>
        <SidebarOption Icon={InboxIcon} title="Inbox" number={54} />
        <SidebarOption Icon={StarIcon} title="Starred" number={20} />
        <SidebarOption Icon={WatchLaterIcon} title="Snoozed" number={4} />
        <SidebarOption Icon={SendIcon} title="Send" number={50} />
        <SidebarOption Icon={InsertDriveFileIcon} title="Drafts" number={12} />
        <SidebarOption Icon={ErrorIcon} title="Spam" number={5} />
        <SidebarOption Icon={ExpandMoreIcon} title="More" number={5} />
        <div className="sidebar__footer">
          <div className="sidebar_footerIcon">
          <IconButton><PersonIcon/></IconButton>
          <IconButton><DuoIcon/></IconButton>
          <IconButton><PhoneIcon/></IconButton>
          </div>
        </div>
        </div>
    )
}

export default Sidebar;
