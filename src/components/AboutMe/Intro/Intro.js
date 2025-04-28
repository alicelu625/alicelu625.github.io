import React from 'react';
import {HashLink} from 'react-router-hash-link';

import classes from './Intro.module.css';
import MyPic from '../../../assets/images/alice-picture.JPG';

const intro = () => {
    const info = [
        {
            title: 'About me',
            content: 'I graduated from University of California: Santa Cruz in 2020 with a Bachelor degree in Computer Science. It is one of my goals to build products that will help simplify ways for people to complete tasks, communicate with each other, access information, and solve real world problems. I’m learning new software/web development skills and user experience (UX) concepts everyday then applying them to exciting projects!'
        },
        {
            title: 'When I\'m not coding, I like to',
            content: 'Exercise, family/friends time, try new food, snowboard.'
        }
    ];

    return (
        <div className={classes.Intro}>
            <h1>About Me</h1>
            <div className={classes.PicInfo}>
                <img className={classes.Pic} src={MyPic} alt='Alice'/>
                <div className={classes.InfoSection}>
                    <p className={classes.Info} style={{marginTop: 0}}><strong>Name: </strong>Alice Lu</p>
                    <p className={classes.Info}><strong>Location: </strong>San Francisco Bay Area, CA</p>
                    <p className={classes.Info}><strong>{info[0].title}: </strong>
                        <br/>{info[0].content}
                    </p>
                    <p className={classes.Info} style={{marginBottom: 0}}><strong>{info[1].title}: </strong>
                        <br/>{info[1].content}
                    </p>
                </div>
            </div>
            <div className={classes.Anchors}>
                <HashLink smooth className={classes.AnchorLink} to="/aboutme#skills">Skills</HashLink>
                <HashLink smooth className={classes.AnchorLink} to="/aboutme#experience">Experience</HashLink>
                <HashLink smooth className={classes.AnchorLink} to="/aboutme#education">Education</HashLink>
            </div>
        </div>
    );
};

export default intro;