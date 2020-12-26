import React from 'react';

import classes from './Experience.module.css';
import UCSCLogo from '../../../assets/images/WorkLogos/ucsc-logo.png';
import DGLogo from '../../../assets/images/WorkLogos/dg-logo.jpg';
import GLGLogo from '../../../assets/images/WorkLogos/glg-logo.jpg';
import CanvasLogo from '../../../assets/images/WorkLogos/canvas-logo.png';
import ROCKLogo from '../../../assets/images/WorkLogos/rock-logo.png';
import ExperienceItem from './ExperienceItem/ExperienceItem';

const experience = () => {
    const items = [
        {
            logo: UCSCLogo,
            altText: 'UC Santa Cruz Logo',
            name: 'University of California, Santa Cruz',
            title: 'Human Resource Generalist/ Student Assistant',
            date: '02/2019 - Present',
            content: 'I had the opportunity to lead and train a team of students on a project to update the BAPPR department\'s web pages. Together, we reviewed web page contents, understood policies, and communicated with subject matter experts to ensure that pages were up to date. Due to remote work conditions, I implemented a project management tool to keep track of the team\'s tasks and progresses on various web pages. Aside from the web update project, I also identified problems and executed solutions to improve the filing system, such as reorganizing file cabinets to more evenly distribute the number of files in the cabinets which improved accessibility. Through this experience, I learned the responsibilities of being a project leader and implementing solutions to uprising problems.'
        },
        {
            logo: DGLogo,
            altText: 'Digital Green Logo',
            name: 'Digital Green',
            title: 'Human Resource Coordinator/ Administrative Assistant',
            date: '08/2019-04/2020, 11/2020-Present',
            content: 'I was given the opportunity to assist the Director of Global HR and Talent at Digital Green in their recruiting process when they were short-staffed and needed someone to support them remotely. I was mainly responsible for coordinating with multiple parties from 6 different time zones to schedule and set up interviews between the candidate and the internal interview teams via Google Calendar and Zoom. In order to keep candidates from different roles organized, I implemented my own candidate management tool to keep track of candidates\' interview stages and dates, which increased my efficiency by at least 25%. Aside from scheduling interviews, I also had the chance to assist different teams in projects such as data transition from Excel to a cloud-based management software, as well as tracking and managing essential files via Box and Google Drive. With this experience, I discovered and experimented different ways to keep organized and practiced to be detail oriented. I had demonstrated my abilities to juggle multiple tasks and projects as I was also pursuing my degree and working in another part-time role at UC Santa Cruz while keeping up with the responsibilities of this role.'
        },
        {
            logo: GLGLogo,
            altText: 'Gateway Learning Group Logo',
            name: 'Gateway Learning Group',
            title: 'Human Resource Administrative Assistant',
            date: '08/2017 (Temp)',
            content: 'I had the chance to work at Gateway Learning Group in a 2 weeks temporary position to assist in payroll operations and employee onboarding. For payroll operations, I was responsible for inspecting and ensuring accuracy in timesheets using data analytical tool Tableau. I also assisted in the onboarding process by creating new employee profiles using Central Reach management software and managing employee records using Google Drive and Google Sheets. From this experience, I learned to use different softwares and performed data analysis.'
        },
        {
            logo: CanvasLogo,
            altText: 'Canvas Logo',
            name: 'Canvas',
            title: 'Front Desk Coordinator/Office Manager',
            date: '08/2017 (Temp)',
            content: 'I had the chance to work at Canvas in a 2 weeks temporary position to manage front desk and office operations. For front desk duties, I was responsible for greeting and directing guests to their destination after determining their purpose for visiting, managing mail, and communicating with staff through the office communication platform, Slack. As an office manager, I was responsible for organizing office functions, conference rooms, office supplies, and catered meals. This experience has introduced me to working in a fast paced technological and collaborative environment, the responsibilities of being the first line of communication for visitors, and preparing a well organized office environment for the employees.'
        },
        {
            logo: ROCKLogo,
            altText: 'Real Options for City Kids Logo',
            name: 'Real Options for City Kids',
            title: 'Administrative Assistant',
            date: '10/2013 - 07/2016',
            content: 'From middle school to high school, Real Options for City Kids had given me the opportunity to discover and develop myself through the activities offered in their afterschool program, weekend Student Adult Leadership Training program, and summer program. At the beginning of high school, I was also given the opportunity to work under the Middle School Program Coordinator, where I assisted in coordinating program events as well as records management. I worked with student participants in creating posters for program events, as well as providing support throughout the events. In addition, I maintained the program attendance and participant records using an online database management system. During the summer, I worked as a student lead, where I had the opportunity to lead a group of youths in various enrichment activities as well as field trips to explore the city. I\'m very thankful for these experiences and was very happy to be able to give back to the community, which I grew up in, by providing them the support and opportunities that I had received back when I was a participant through R.O.C.K.'
        }
    ]

    return (
        <div className={classes.Experience}>
            <h2 className={classes.Title}>Experience</h2>
            {items.map((item, i) => (
                <ExperienceItem
                    key={i}    
                    logo={item.logo}
                    altText={item.altText}
                    name={item.name}
                    date={item.date}
                    title={item.title}
                    content={item.content}
                />
            ))}
        </div>
    );
}

export default experience;