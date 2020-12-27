import React, {Component} from 'react';

import ProjectItem from './ProjectItem/ProjectItem';
import Modal from '../UI/Modal/Modal';
import classes from './ProjectItems.module.css';

import BurgerBuilderCover from '../../assets/images/ProjectCovers/react-burger-builder.png';
import ToDoListCover from '../../assets/images/ProjectCovers/pern-to-do-list.png';
import TributePageCover from '../../assets/images/ProjectCovers/fcc-tribute-page.png';


class ProjectItems extends Component {
    state = {
        showModal: false,
        selectedItem: null
    }

    items = [
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
            cover: TributePageCover,
            altText: 'Tribute Page Project Cover',
            name: 'Tribute Page',
            date: 'December 2020',
            demo: 'https://codepen.io/alicelu625/pen/abmJwpq',
            srcCode: 'https://codepen.io/alicelu625/pen/abmJwpq',
            description: 'This is a tribute page dedicated to Martin Luther King Jr. It was completed as part of the freeCodeCamp Responsive Web Design Projects series.',
            tools: 'HTML, CSS'
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
        }
    ];

    closeModalHandler = () => {
        this.setState({showModal: false});
    }

    openModalHandler = (id) => {
        this.setState({showModal: true, itemId: id});
    }

    render() {
        let modalContent = null;
        console.log(this.state.itemId);

        if (this.state.itemId !== undefined) {
            modalContent = <div>
                <h3>{this.items[this.state.itemId].name}</h3>
            </div>;
        }

        return(
            <div className={classes.ProjectItems}>
                <Modal show={this.state.showModal} modalClosed={this.closeModalHandler}>
                    {modalContent}
                </Modal>
                {this.items.map((item, i) => (
                    <ProjectItem
                        key={i}    
                        cover={item.cover}
                        altText={item.altText}
                        name={item.name}
                        date={item.date}
                        demo={item.demo}
                        srcCode={item.srcCode}
                        description={item.description}
                        tools={item.tools}
                        id={i}
                        projectClicked={this.openModalHandler}
                    />
                ))}
            </div>
        );
    }
}

export default ProjectItems;