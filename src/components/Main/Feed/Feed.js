import React, { useEffect, useState } from 'react';
import db from '../../../firebase';
import classes from './Feed.module.css';
import MessageSender from './MessageSender/MessageSender';
import Post from './Post/Post';
import StoryReel from './StoryReel/StoryReel';

const Feed = () => {
   const [posts, setPosts] = useState();

   useEffect(() => {
      db.collection('posts')
         .orderBy('timestamp', 'desc')
         .onSnapshot(
            (snapshot) => {
               setPosts(
                  snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
               );
            },
            (error) => console.log(error)
         );
   }, []);

   return (
      <div className={classes.Feed}>
         <StoryReel />
         <MessageSender />
         {posts &&
            posts.map((post) => (
               <Post
                  key={post.id}
                  profilePic={post.data.profilePic}
                  username={post.data.username}
                  timestamp={post.data.timestamp}
                  message={post.data.message}
                  image={post.data.image}
               />
            ))}
      </div>
   );
};

export default Feed;
