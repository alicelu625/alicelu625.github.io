import React from 'react';

import classes from './Education.module.css';
import EducationItem from './EducationItem/EducationItem';
import {items} from './Items';

const education = () => {
    return (
        <div id="education" className={classes.Education}>
            <h2 className={classes.Title}>Education</h2>
            {items.map((item, i) => (
                <EducationItem
                    key={i}    
                    logo={item.logo}
                    altText={item.altText}
                    name={item.name}
                    date={item.date}
                    course={item.course}
                    content={item.content}
                />
            ))}
        </div>
    );
}

export default education;