import React from 'react';
import classes from './MessageSender.module.css';
import MessageSenderBottom from './MessageSenderBottom/MessageSenderBottom';
import MessageSenderTop from './MessageSenderTop/MessageSenderTop';

const MessageSender = () => {
   return (
      <div className={classes.MessageSender}>
         <MessageSenderTop />
         <MessageSenderBottom />
      </div>
   );
};

export default MessageSender;
