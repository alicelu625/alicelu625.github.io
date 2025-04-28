import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import { HashLink } from 'react-router-hash-link';

import classes from './FeaturedSkills.module.css';
import jsLogo from '../../../assets/images/Home/js-logo.png';
import cssLogo from '../../../assets/images/Home/css-logo.png';
import htmlLogo from '../../../assets/images/Home/html-logo.png';
import pythonLogo from '../../../assets/images/Home/python-logo.png';
import reactLogo from '../../../assets/images/Home/react-logo.png';

const featuredSkills = () => {
    const logosRow1 = [
        { source: jsLogo, altText: 'JavaScript Logo' },
        { source: cssLogo, altText: 'CSS Logo' },
        { source: htmlLogo, altText: 'HTML Logo' },
    ];

    const logosRow2 = [
        { source: reactLogo, altText: 'React Logo' },
        { source: pythonLogo, altText: 'Python Logo' }
    ];

    return (
        <div className={classes.FeaturedSkills}>
            <h2>Featured Skills</h2>
            <div className={classes.LogosRow1}>
                {logosRow1.map((logo, i) => (
                    <img key={i} className={classes.Logo} src={logo.source} alt={logo.altText} />
                ))}
            </div>
            <div className={classes.LogosRow2}>
                {logosRow2.map((logo, i) => (
                    <img key={i} className={classes.Logo} src={logo.source} alt={logo.altText} />
                ))}
            </div>
            <div className={classes.LearnMore}>
                <HashLink className={classes.LearnMoreText} to="/aboutme#skills">View All Skills<IoIosArrowForward className={classes.RightArrowIcon} /></HashLink>
            </div>
        </div>
    );
}

export default featuredSkills;