import React from 'react';

import classes from './Education.module.css';
import EducationItem from './EducationItem/EducationItem';

const education = () => {
    return (
        <div className={classes.Education}>
            <h2 className={classes.Title}>Education</h2>
            <EducationItem/>
        </div>
    )
}

export default education;