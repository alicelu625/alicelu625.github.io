import React from 'react';
import {HashLink} from 'react-router-hash-link';

import classes from './Intro.module.css';
import MyPic from '../../../assets/images/alice-picture.JPG';

const intro = () => {
    const info = [
        {
            title: 'About me',
            content: 'I\'m a recent 2020 graduate at the University of California: Santa Cruz, where I discovered my passion for software/web development. I enjoy learning new tools and concepts to improve user experience. It is one of my goals to build products that will help simplify ways for people to complete tasks, communicate with each other, access information, and solve real world problems.'
        },
        {
            title: 'When I\'m not coding, I like to',
            content: 'Exercise, explore new Apps, motivate others, family/friends time, longboarding'
        }
    ];

    return (
        <div className={classes.Intro}>
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
                <HashLink smooth className={classes.AnchorLink} to="/aboutme#education">Education</HashLink>
                <HashLink smooth className={classes.AnchorLink} to="/aboutme#skills">Skills</HashLink>
                <HashLink smooth className={classes.AnchorLink} to="/aboutme#experience">Experience</HashLink>
            </div>
        </div>
    );
};

export default intro;