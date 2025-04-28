import React from 'react';
import { FaLink } from 'react-icons/fa';
import { FaPaperclip } from 'react-icons/fa';
import { IoIosArrowForward } from 'react-icons/io';
import { NavLink } from 'react-router-dom';

import LinkedInLogo from '../../../assets/images/Home/linkedin-logo.png';
import GitHubLogo from '../../../assets/images/Home/github-logo.png';
import classes from './HomeSummary.module.css';

const homeSummary = () => {
    const references = [
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
            <h1>Hi, I'm Alice — building user-friendly web digital experiences.</h1>
            <p className={classes.IntroCopy}>A passionate web developer with marketing expertise, crafting websites that not only perform but also convert.</p>
            <div className={classes.MyInfo}>
                <div className={classes.References}>
                    {references.map((ref, i) => (
                        <a href={ref.refLink} target="_blank" rel="noreferrer" key={i}>
                            <img className={classes.Logos} src={ref.source} alt={ref.altText} />
                            {ref.isDoc
                                ? <p className={classes.ReferenceText}>
                                    <FaPaperclip className={classes.LinkIcons} />Resume
                                </p>
                                : <p className={classes.ReferenceText}>
                                    <FaLink className={classes.LinkIcons} />{ref.name}
                                </p>
                            }
                        </a>
                    ))}
                </div>
            </div>
            <div className={classes.LearnMore}>
                <NavLink
                    className={classes.LearnMoreText}
                    exact to="/aboutme"
                >
                    Learn More
                    <IoIosArrowForward className={classes.RightArrowIcon} />
                </NavLink>
            </div>
        </div>
    );
}

export default homeSummary;