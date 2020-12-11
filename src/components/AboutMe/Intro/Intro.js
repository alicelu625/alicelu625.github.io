import React from 'react';

import classes from './Intro.module.css';
import MyPic from '../../../assets/images/alice-picture.JPG';

const intro = () => {
    const info = [
        {title: 'About me', content: 'I\'m a recent graduate at the University of California: Santa Cruz, where I discovered my passion for software/web development. I enjoy learning new tools and concepts to improve user experience. It is one of my goals to build products that will help simplify ways for people to complete tasks, communicate with each other, access information, etc.'},
        {title: 'When I\'m not coding, I like to', content: 'Exercise, discover new Apps, motivate others, family/friends time'}
    ];

    return (
        <div className={classes.Intro}>
            <img className={classes.Pic} src={MyPic} alt='Photo of Alice'/>
            <div className={classes.InfoSection}>
                <p className={classes.Info}><strong>Name: </strong>Alice Lu</p>
                <p className={classes.Info}><strong>Location: </strong>San Francisco, CA</p>
                {info.map(info => (
                    <p className={classes.Info}><strong>{info.title}: </strong>
                    <br/>{info.content}</p>
                ))}
            </div>
            <div className={classes.Anchors}>
                <a>Skills</a>
                <a>Education</a>
                <a>Experience</a>
            </div>
        </div>
    );
};

export default intro;