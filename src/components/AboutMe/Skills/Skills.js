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
            content: 'React.js, Redux, Node.js, Express.js, Vue.js, RESTful APIs, PostgreSQL, Firebase (database & authentication), Jest/Enzyme (unit testing), Chrome Dev Tools/Redux Dev Tools (debugging), Git, Figma, Postman, Content Management Systems (CMS), Android Studios'
        },
        {
            title: 'Technical Skills',
            content: 'Responsive Web Development, UX Design, Web Accessibility, Database Systems, Data Structures, Algorithms, Mobile Application Development, Computer Systems Design, Data Mining, Project Management'
        },
        {
            title: 'Other Skills/Traits',
            content: 'Problem Solving, Adaptability, Eager to Learn, Teamwork, Leadership, Organization, Passionate, Communication, Priority Management, Creativity, Flexibility'
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