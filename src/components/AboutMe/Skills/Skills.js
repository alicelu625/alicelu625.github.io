import React from 'react';

import classes from './Skills.module.css';

const skills = () => {
    const skillsList = [
        {
            title: 'Programming Languages',
            content: 'JavaScript, CSS, HTML, Python, SQL, Java'
        },
        {
            title: 'I\'ve worked with',
            content: 'React, Redux, Node, Express, RESTful APIs, PostgreSQL, Jest/Enzyme (Unit Testing), Chrome Dev Tools/Redux Dev Tools (Debugging), Heroku, Firebase (Database & Authentication), Git, Figma (Prototyping), Postman (API Testing), Google Analytics, Content Management Systems (CMS), Android Studios'
        },
        {
            title: 'Technical Skills',
            content: 'Responsive Web Development, UX Design, Agile Development, Web Accessibility, Database Systems, Data Structures, Algorithms, Mobile Application Development, Computer Systems Design, Data Mining, Project Management'
        },
        {
            title: 'Other Skills/Traits',
            content: 'Problem Solving, Adaptability, Eager to Learn, Collaborative, Leadership, Organization, Passionate, Communication, Priority Management, Creativity, Flexibility'
        },
        {
            title: 'Multilingual',
            content: 'English, Chinese (Mandarin, Cantonese)'
        }
    ]

    return (
        <div id="skills" className={classes.Skills}>
            <h2 className={classes.Title}>Skills</h2>
            <div className={classes.SkillsList}>
                {skillsList.map((skill, i) => (
                    <p key={i}><strong>{skill.title}:</strong><br/>{skill.content}</p>
                ))}
            </div>
        </div>
    );
};

export default skills;