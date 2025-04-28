import React from 'react';

import classes from './Skills.module.css';

const skills = () => {
    const skillsList = [
        {
            title: 'Programming Languages',
            content: 'HTML, CSS, JavaScript, Python, SQL'
        },
        {
            title: 'I\'ve worked with',
            content: 'Content Management Systems (Adobe Experience Manager, Drupal), A/B Test and Personalization (Adobe Target), JIRA, Confluence, Bootstrap, React, Node, RESTful APIs, Postman (API Testing), Figma, Zeplin, Google Analytics, Git'
        },
        {
            title: 'Technical Skills',
            content: 'Responsive Web Development, Project Management, UX Design, SEO Concepts, Marketing, Web Accessibility, Data Structures, Algorithms, Database Systems'
        },
        {
            title: 'Other Skills/Traits',
            content: 'Problem Solving, Adaptability, Eager to Learn, Collaborative, Leadership, Organization, Passionate, Communication, Priority Management, Creativity, Flexibility, Curiosity'
        },
        {
            title: 'Multilingual',
            content: 'English, Chinese (Mandarin, Cantonese)'
        }
    ]

    return (
        <div id="skills" className={classes.Skills}>
            <h2>Skills</h2>
            <div className={classes.SkillsList}>
                {skillsList.map((skill, i) => (
                    <p key={i} className={classes.Skill}><strong>{skill.title}:</strong><br/>{skill.content}</p>
                ))}
            </div>
        </div>
    );
};

export default skills;