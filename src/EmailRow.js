import StarBorderIcon from '@material-ui/icons/StarBorder';
import React from 'react'
import './EmailRow.css'
import { Checkbox , IconButton} from '@material-ui/core'
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { selectMail } from './features/mailSlice';

function EmailRow({title,id,subject,description,time}) {
    const history=useHistory();
    const dispatch = useDispatch();


    const openMail=() =>{
        dispatch(selectMail({
            title,
            id,
            subject,
            description,
            time,
        }));
         history.push("/mail");
    };

    return (
        <div className="emailRow" onClick={openMail}>
            <div className="emailRow__options">
            <Checkbox />
            <IconButton>
               <StarBorderIcon />
            </IconButton>
            <IconButton>
               <LabelImportantIcon />
            </IconButton>
            
            </div>
            <h3 className="emailRow__title">
             {title}
            </h3>
            <div className="emailRow__message">
              <h4>{subject}{"  "}
              <spam className="emailRow__description">-
              {description}
              </spam></h4>
            </div>
            <div className="emailRow__time">
            {time}
            
            </div>
            
        </div>
    )
}

export default EmailRow
