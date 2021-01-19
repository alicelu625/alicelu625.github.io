import React from 'react';
import {FaLink} from 'react-icons/fa';
import {FaPaperclip} from 'react-icons/fa';
import {IoIosArrowForward} from 'react-icons/io';
import { NavLink } from 'react-router-dom';

import Resume from '../../../assets/files/AliceLuResume.pdf';
import ResumeIcon from '../../../assets/images/Home/resume-icon.png';
import LinkedInLogo from '../../../assets/images/Home/linkedin-logo.png';
import GitHubLogo from '../../../assets/images/Home/github-logo.png';
import classes from './HomeSummary.module.css';

const homeSummary = () => {
    const references = [
        {
            refLink: Resume,
            source: ResumeIcon,
            altText: 'Resume Icon',
            isDoc: true,
            name: 'Resume'
        },
        {
            refLink: "https://www.linkedin.com/in/alice-zifei-lu/",
            source: LinkedInLogo,
            altText: 'LinkedIn Logo',
            isDoc: false,
            name: 'LinkedIn'
        },
        {
            refLink: "https://github.com/alicelu625",
            source: GitHubLogo,
            altText: 'GitHub Logo',
            isDoc: false,
            name: 'Github'
        }
    ]
    return (
        <div className={classes.HomeSummary}>
            <p className={classes.IntroQuote}>" There has to be a better way to do this! "</p>
            <p className={classes.IntroSentences}>Does this ever cross your mind when working on a task?</p>
            <p className={classes.IntroSentences}>It always crosses mine and motivates me to build products to achieve the "better way".</p>
            <div className={classes.MyInfo}>
                <p className={classes.MyInfoIntro}>
                    Hi, I'm Alice!
                    <br/>Software/Web Developer
                </p>
                <p className={classes.MyInfoLooking}>Looking for opportunities!</p>
                <p className={classes.MyInfoEmail}>Contact me: <a href="mailto:alicelu625@gmail.com">alicelu625@gmail.com</a></p>
                <div className={classes.References}>
                    {references.map((ref, i) => (
                        <a href={ref.refLink} target="_blank" rel="noreferrer" key={i}>
                            <img className={classes.Logos} src={ref.source} alt={ref.altText}/>
                            {ref.isDoc
                                ? <p className={classes.ReferenceText}>
                                    <FaPaperclip className={classes.LinkIcons}/>Resume
                                </p>
                                : <p className={classes.ReferenceText}>
                                    <FaLink className={classes.LinkIcons}/>{ref.name}
                                </p>
                            }
                        </a>
                    ))}
                </div>
            </div>
            <NavLink 
                className={classes.LearnMoreText}
                exact to="/aboutme"
            >
                Learn More
                <IoIosArrowForward className={classes.RightArrowIcon}/>
            </NavLink>
        </div>
    );
}

export default homeSummary;