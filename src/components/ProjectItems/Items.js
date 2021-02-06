import BurgerBuilderCover from '../../assets/images/ProjectCovers/react-burger-builder.png';
import ToDoListCover from '../../assets/images/ProjectCovers/pern-to-do-list.png';
import TributePageCover from '../../assets/images/ProjectCovers/fcc-tribute-page.png';
import SurveyFormCover from '../../assets/images/ProjectCovers/fcc-survey-form.png';
import SplitTheBillCover from '../../assets/images/ProjectCovers/split-the-bill.png';
import CSAAppCover from '../../assets/images/ProjectCovers/csa-app.png';
import PersonalWebOldCover from '../../assets/images/ProjectCovers/personal-website-old.png';
import PersonalWebNewCover from '../../assets/images/ProjectCovers/personal-website-new.png';

export const items = [
    {
        cover: SplitTheBillCover,
        altText: 'Split A Bill Project Cover',
        name: 'Split A Bill',
        date: 'September 2020 - Present',
        demo: 'https://www.figma.com/proto/GmX8JOWGWJIGnEGo5iC3im/Split-The-Bill?node-id=34%3A4&viewport=-929%2C121%2C0.5&scaling=scale-down',
        srcCode: 'https://github.com/alicelu625/split-a-bill',
        description: 'It is often difficult to split a check/bill among a group of people, where everyone is paying for a different part of the check/bill (especially tax, tips, and other additional fees). In collaboration with a designer and a developer, we are developing a tool to automate the calculation of how much each person has to pay, making it easier and quicker for people to split their bills/checks for dining, groceries, etc.',
        tools: 'Completed competitive analysis of similar existing products. Finalized the scope and features of the project. Collected sample data to test calculations. Completed wireframe and initial usability testing. Began working on components.'
    },
    {
        cover: SurveyFormCover,
        altText: 'Survey Form Project Cover',
        name: 'Survey Form',
        date: 'January 2021',
        demo: 'https://codepen.io/alicelu625/full/gOwzQWN',
        srcCode: 'https://codepen.io/alicelu625/pen/gOwzQWN',
        description: 'This is a sample survey form. It was completed as part of the freeCodeCamp Responsive Web Design Projects series.',
        tools: 'HTML, CSS'
    },
    {
        cover: PersonalWebNewCover,
        altText: 'Personal Website Project Cover',
        name: 'Personal Website (New)',
        date: 'December 2020',
        demo: 'https://alicezlu.com/',
        srcCode: 'https://github.com/alicelu625/alicelu625.github.io',
        description: 'This web application was a re-designed to the old personal website with new modern design and navigations to improve user interface and experience. What\'s new: New modern design, home page with summary and easy access to details, reusable components to handle projects, improved way to handle lengthy descriptions, improved navigation, used routing to render different "pages", animation.',
        tools: 'React 16, JavaScript (ES6), HTML 5, CSS 3 (mobile first approach), Webpack, React-Router, React Icons'
    },
    {
        cover: TributePageCover,
        altText: 'Tribute Page Project Cover',
        name: 'Tribute Page',
        date: 'December 2020',
        demo: 'https://codepen.io/alicelu625/full/abmJwpq',
        srcCode: 'https://codepen.io/alicelu625/pen/abmJwpq',
        description: 'This is a tribute page dedicated to Martin Luther King Jr. It was completed as part of the freeCodeCamp Responsive Web Design Projects series.',
        tools: 'HTML, CSS'
    },
    {
        cover: BurgerBuilderCover,
        altText: 'Burger Builder Project Cover',
        name: 'Burger Builder (React)',
        date: 'September 2020 - November 2020',
        demo: 'https://alicelu625.github.io/react-burger-builder/',
        srcCode: 'https://github.com/alicelu625/react-burger-builder',
        description: 'A web application that allows a user to build a burger by adding/removing ingredients and place the order if authenticated. An order summary is displayed upon checkout & user can proceed to checkout by filling out contact data. For mobile support (smaller screens), a toggle menu is implemented in place of the toolbar on the top.',
        tools: 'React 16, Redux, React-Router, React-Thunk, JavaScript (ES6), HTML5, CSS3 w/ Mobile First, Webpack, Backend/Database: Google Firebase, Axios, Firebase Authentication, Unit Tests (Jest, Enzyme)'
    },
    {
        cover: ToDoListCover,
        altText: 'To Do List Project Cover',
        name: 'To Do List (PERN)',
        date: 'November 2020 - December 2020',
        demo: 'https://pern-to-do-list.herokuapp.com/',
        srcCode: 'https://github.com/alicelu625/pern-to-do-list',
        description: 'The To Do List application allows a user to add, edit, and delete to do list items by sending GET, PUT, POST, and DELETE API requests to the server.',
        tools: 'PERN stack (PostgreSQL, Express.js, React.js, Node.js), JavaScript, HTML, Bootstrap, Heroku, Webpack, CORS, pg (node-postgres), RESTful APIs'
    },
    {
        cover: PersonalWebOldCover,
        altText: 'Initial Personal Website Project Cover',
        name: 'Personal Website (Old)',
        date: 'September 2020',
        demo: 'https://alicezlu.com/personal-website-old/',
        srcCode: 'https://github.com/alicelu625/personal-website-old',
        description: 'This website was built for the purpose of showcasing my initial web development skills as well as my projects and experiences. As I learned more about web development and user experience, a new website was developed to improve user interface and user experience.',
        tools: 'React.js, JavaScript ES6, HTML5, CSS3, Webpack, GitHub Pages (server)'
    },
    {
        cover: CSAAppCover,
        altText: 'CSA App Project Cover',
        name: 'CSA App',
        date: 'April 2018 - June 2018',
        demo: 'https://www.youtube.com/watch?v=MFH4bRvFcU8&feature=youtu.be',
        srcCode: 'https://github.com/alicelu625/android-studio-csa-app',
        description: 'This application was designed specifically for UC Santa Cruz\'s Chinese Student Association (CSA), but this app can be altered to be used for similar student clubs. The purpose of the app was to keep track of CSA club information, giving users easier access to information and events that they may be seeking without the need to contact the club directly. Features of this app includes display of general information about the club, announcements, calendar to display meeting dates and events, and information about the club’s house system.',
        tools: 'Android Studio, Java, XML'
    }
    
];