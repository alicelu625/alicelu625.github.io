import React from 'react';
import {IoIosArrowForward} from 'react-icons/io';

import classes from './FeaturedSkills.module.css';
import jsLogo from '../../../assets/images/Home/js-logo.png';
import cssLogo from '../../../assets/images/Home/css-logo.png';
import htmlLogo from '../../../assets/images/Home/html-logo.png';
import pythonLogo from '../../../assets/images/Home/python-logo.png';
import reactLogo from '../../../assets/images/Home/react-logo.png';

const featuredSkills = () => {
    const logos = [
        {source: jsLogo, altText: 'JavaScript Logo'},
        {source: cssLogo, altText: 'CSS Logo'},
        {source: htmlLogo, altText: 'HTML Logo'},
        {source: pythonLogo, altText: 'Python Logo'},
        {source: reactLogo, altText: 'React Logo'}
    ];
    return (
        <div className={classes.FeaturedSkills}>
            <h2 className={classes.Title}>Featured Skills</h2>
            <div className={classes.Logos}>
                {logos.map((logo, i) => (
                    <img key={i} className={classes.Logo} src={logo.source} alt={logo.altText}/>
                ))}
            </div>
            <span className={classes.LearnMoreText}>View all skills<IoIosArrowForward className={classes.RightArrowIcon}/></span>
        </div>
    );
}

export default featuredSkills;