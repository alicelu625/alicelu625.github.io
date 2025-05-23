import React from 'react';

import classes from './Experience.module.css';
import ExperienceItem from './ExperienceItem/ExperienceItem';
import {items} from './Items';

const experience = () => {
    return (
        <div id="experience" className={classes.Experience}>
            <h2>Experience</h2>
            <div className={classes.ExperienceItems}>
                {items.map((item, i) => (
                    <ExperienceItem
                        key={i}    
                        logo={item.logo}
                        altText={item.altText}
                        name={item.name}
                        date={item.date}
                        title={item.title}
                        content={item.content}
                        location={item.location}
                        link={item.link}
                    />
                ))}
            </div>
        </div>
    );
}

export default experience;