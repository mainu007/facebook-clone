import { useMediaQuery } from '@material-ui/core';
import React from 'react';
import Story from './Story/Story';
import classes from './StoryReel.module.css';

const StoryReel = () => {
   const width580 = useMediaQuery('(min-width:580px)');
   const width1199 = useMediaQuery('(min-width:1199px)');
   return (
      <div className={classes.StoryReel}>
         <Story
            backgroundImage="https://wallpapercave.com/wp/wp4102995.jpg"
            profileImage="https://scontent.fdac22-1.fna.fbcdn.net/v/t1.0-9/121710433_1016677258805482_616821753736853791_o.jpg?_nc_cat=108&ccb=2&_nc_sid=09cbfe&_nc_ohc=R5imQzzsblIAX8dKmtp&_nc_ht=scontent.fdac22-1.fna&oh=5ff115944e63ef29404e5df3ab3981d3&oe=5FC63E78"
            title="Mainu"
         />
         <Story
            backgroundImage="https://scontent.fdac22-1.fna.fbcdn.net/v/t1.0-9/123307664_817377705489060_3686230495788946554_o.jpg?_nc_cat=105&ccb=2&_nc_sid=5b7eaf&_nc_ohc=YLiDyGpmJ04AX_ngQ4r&_nc_ht=scontent.fdac22-1.fna&oh=2819a7e426ed06eb002a91525d4be1ae&oe=5FC9A8FE"
            profileImage="https://scontent.fdac22-1.fna.fbcdn.net/v/t1.0-9/123136929_814192595807571_4420502766282745418_o.jpg?_nc_cat=104&ccb=2&_nc_sid=09cbfe&_nc_ohc=jn6jIcssnJAAX9l5WOo&_nc_oc=AQkflMJe0d2Sd2ykZDeNjrcl5H2YH6Qk4dTD_btmDvnCg2Pt9ubOh9nR1rOo0BgCOpA&_nc_ht=scontent.fdac22-1.fna&oh=7e569e9c900aabf89813840cf1432c2d&oe=5FC8C3F5"
            title="Md Hasnain Ahmed"
         />
         <Story
            backgroundImage="https://scontent.fdac22-1.fna.fbcdn.net/v/t1.0-9/46730533_2113861702261691_2205477728109461504_o.jpg?_nc_cat=109&ccb=2&_nc_sid=174925&_nc_ohc=WNxOaD-j-7IAX_fwEQq&_nc_oc=AQnqS0783NV_taTO8A3okJdJ48Xojwq7YF_Q3RofOCo1tfxW_2-0fKqSU0ysVlS4Ji0&_nc_ht=scontent.fdac22-1.fna&oh=42ea5d68fe1538b6f1755fad447a3200&oe=5FC7463D"
            profileImage="https://scontent.fdac22-1.fna.fbcdn.net/v/t1.0-9/118728868_2624756301172226_2733970087235965835_n.jpg?_nc_cat=111&ccb=2&_nc_sid=09cbfe&_nc_ohc=hcYn_rlP398AX8FU2ww&_nc_ht=scontent.fdac22-1.fna&oh=9e4a8910a4f9cfc0df4e3d03a4532097&oe=5FC796D4"
            title="R.m Shanto Kazi"
         />
         {width580 && (
            <Story
               backgroundImage="https://scontent.fdac22-1.fna.fbcdn.net/v/t1.0-9/20621181_509386079393385_8773610815953399564_n.jpg?_nc_cat=106&ccb=2&_nc_sid=8bfeb9&_nc_ohc=oWUc3Z1diXYAX-olAxx&_nc_ht=scontent.fdac22-1.fna&oh=1a92a02754ed4dff9318f31952dd2a00&oe=5FC7590A"
               profileImage="https://scontent.fdac22-1.fna.fbcdn.net/v/t1.0-9/76769633_1020781371587184_975290229999009792_o.jpg?_nc_cat=105&ccb=2&_nc_sid=730e14&_nc_ohc=TTH0YOXS5lUAX8NJvWz&_nc_ht=scontent.fdac22-1.fna&oh=f1c67bf192716d42a6dcc15f534ddee5&oe=5FC6AFAA"
               title="Ak Anamul"
            />
         )}
         {width1199 && (
            <Story
               backgroundImage="https://scontent.fdac22-1.fna.fbcdn.net/v/t1.0-9/66019201_581594045701663_8005770498023620608_n.jpg?_nc_cat=109&ccb=2&_nc_sid=8bfeb9&_nc_ohc=cBRV0EbhPeAAX88OL_z&_nc_ht=scontent.fdac22-1.fna&oh=9da3fa1bb409b50cb6290ddbb6c64bec&oe=5FC7ABF2"
               profileImage="https://scontent.fdac22-1.fna.fbcdn.net/v/t1.0-9/123339133_947725529088511_2424314996418228067_n.jpg?_nc_cat=103&ccb=2&_nc_sid=09cbfe&_nc_ohc=7gnRk2E03VoAX_Vk7CP&_nc_ht=scontent.fdac22-1.fna&oh=836d9159190d6ab871bc6086d72f6335&oe=5FC9417B"
               title="Sanam Sahed"
            />
         )}
      </div>
   );
};

export default StoryReel;
