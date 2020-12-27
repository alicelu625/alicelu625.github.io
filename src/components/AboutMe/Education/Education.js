import React from 'react';

import classes from './Education.module.css';
import EducationItem from './EducationItem/EducationItem';
import UCSCLogo from '../../../assets/images/EducationLogos/ucsc-logo.png';
import FCCLogo from '../../../assets/images/EducationLogos/fcc-logo.jpg';
import UdemyLogo from '../../../assets/images/EducationLogos/udemy-logo.png';


const education = () => {
    const items = [
        {
            logo: UCSCLogo,
            altText: 'UC Santa Cruz Logo',
            name: 'University of California, Santa Cruz',
            date: 'September 2016 - June 2020',
            course: 'Bachelor - Computer Science',
            content: 'At UC Santa Cruz, I developed foundational skills in computer science such as data structures, algorithms, and computer systems design. Through elective courses, I discovered my passion for web development, which gave me the push to begin pursuing a career in front-end/full stack web development and develop more skills post-college.'
        },
        {
            logo: FCCLogo,
            altText: 'freeCodeCamp logo',
            name: 'freeCodeCamp',
            date: 'September 2020 - Present',
            course: 'Responsive Web Design',
            content: 'College only gave me the basics in web development, so I took the initiative to find free online resources to expand my knowledge and skills. I discovered freeCodeCamp and began their Responsive Web Design Certification coursework, where I learned about HTML, CSS (including Flexbox and Grid), visual design, accessibility, and principles of responsive web design.'
        },
        {
            logo: UdemyLogo,
            altText: 'udemy logo',
            name: 'Udemy',
            date: 'September 2020 - November 2020',
            course: 'React - The Complete Guide',
            content: 'I decided to learn my first web framework, React, through Udemy. This course covered React concepts and features, including Hooks, React Router, and Redux. I was able to practice with hands-on course projects as well as personal projects.'
        }
    ];

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