import React from 'react'
import './SendMail.css'
import CloseIcon from '@material-ui/icons/Close';
import { Button } from '@material-ui/core';
import {useForm} from 'react-hook-form';
import { useDispatch } from 'react-redux';
import {closeSendMessage} from "./features/mailSlice";
import { db } from './firebase';
import firebase from "firebase";

function SendMail() {
    const {register,handleSubmit,watch,error}=useForm();
    const dispatch = useDispatch();

    const onSubmit=(formData) =>{
      console.log(formData);
      db.collection('emails').add({
        to: formData.to,
        subject: formData.subject,
        message: formData.message,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });
      dispatch(closeSendMessage());
    };
    return (
        <div className="sendMail">
           <div className="sendMail__header">
               <h3>New message</h3>
               <CloseIcon onClick={()=> dispatch(closeSendMessage())} className="sendMail__close" />
           </div>
           <form onSubmit={handleSubmit(onSubmit)}>
           <input name="to" placeholder="To" type="email" {...register('to', { required: true })} />
             <input name="subject" placeholder="Subject" type="text" {...register('subject', { required: true })} />
             <input name="message" className="sendMail__message" placeholder="Message..." type="text"  {...register('message', { required: true })}  />

             <div className="sendMail__options">
                <Button variant="contained" type="submit" color="primary" className="sendMail__send">Send</Button>
             </div>
           
           </form>
        </div>
    )
}

export default SendMail;
