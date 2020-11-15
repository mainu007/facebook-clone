import React, { useState } from "react";
import { Avatar, Button } from "@material-ui/core";
import classes from "./MessageSenderTop.module.css";
import { useStateValue } from "../../../../../store/StateProvider";
import firebase from "firebase";
import db from "../../../../../firebase";

const MessageSenderTop = () => {
   const [{ user }] = useStateValue();
   const [input, setInput] = useState("");
   const [inputUrl, setInputUrl] = useState("");
   const onSubmit = (e) => {
      e.preventDefault();
      if (input) {
         db.collection("posts").add({
            profilePic: user.photoURL,
            username: user.displayName,
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            image: inputUrl,
         });

         setInput("");
         setInputUrl("");
      }
   };

   return (
      <div className={classes.MessageSenderTop}>
         <Avatar src={user.photoURL} />
         <form>
            <input
               onChange={(e) => setInput(e.target.value)}
               value={input}
               className={classes.MessageSenderInput}
               type="text"
               placeholder={`What's on your mind?`}
            />
            <input
               onChange={(e) => setInputUrl(e.target.value)}
               value={inputUrl}
               placeholder="Image URL (Optional)"
            />
            <Button
               type="submit"
               variant="contained"
               color="primary"
               onClick={onSubmit}
            >
               Submit
            </Button>
         </form>
      </div>
   );
};

export default MessageSenderTop;
