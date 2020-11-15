import React from "react";
import { auth, provider } from "../../firebase";
import { Button } from "@material-ui/core";
import classes from "./Login.module.css";
import { useStateValue } from "../../store/StateProvider";
import actionTypes from "../../store/action";

const Login = () => {
   const [, dispatch] = useStateValue();
   const signIn = () => {
      //sign in
      auth
         .signInWithPopup(provider)
         .then((result) => {
            const user = {
               displayName: result.user.displayName,
               photoURL: result.user.photoURL,
            };
            dispatch({
               type: actionTypes.SET_USER,
               user,
            });
         })
         .catch((err) => console.log(err));
   };

   return (
      <div className={classes.Login}>
         <div className={classes.LoginLogo}>
            <img
               src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/600px-Facebook_f_logo_%282019%29.svg.png"
               alt="..."
            />
            <img
               src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg"
               alt="..."
            />
         </div>
         <Button type="submit" onClick={signIn}>
            Sign In
         </Button>
      </div>
   );
};

export default Login;
