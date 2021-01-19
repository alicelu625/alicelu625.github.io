import React, {Component} from 'react';
import {IoIosArrowForward} from 'react-icons/io';
import {ImNewTab} from 'react-icons/im';
import { NavLink } from 'react-router-dom';

import classes from './FeaturedProjects.module.css';
import ProjectItem from '../../ProjectItems/ProjectItem/ProjectItem';
import Modal from '../../UI/Modal/Modal';
import {items} from '../../ProjectItems/Items';

class FeaturedProjects extends Component {
    state = {
        showModal: false,
        selectedItem: null
    }

    closeModalHandler = () => {
        this.setState({showModal: false});
    }

    openModalHandler = (id) => {
        this.setState({showModal: true, itemId: id});
    }

    render() {
        let modalContent = null;

        if (this.state.itemId !== undefined) {
            let item = items[this.state.itemId];
            modalContent = (
                <div className={classes.Modal}>
                    <h3 className={classes.Name}>{item.name}</h3>
                    <p className={classes.Date}>{item.date}</p>
                    <div className={classes.ButtonDiv}>
                        <a 
                            href={item.demo} 
                            className={classes.Button}
                            target="_blank"
                            rel="noreferrer"
                        > 
                            <span className={classes.ButtonText}>Demo</span>
                            <ImNewTab className={classes.Icon}/>
                        </a>
                        <a 
                            href={item.srcCode}
                            className={classes.Button}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <span className={classes.ButtonText}>Source Code</span>
                            <ImNewTab className={classes.Icon}/>
                        </a>
                    </div>
                    <p className={classes.Content}><strong>Description: </strong>{item.description}</p>
                    <p className={classes.Content}><strong>What I used: </strong>{item.tools}</p>
                </div>
            );
        }

        return (
            <div className={classes.FeaturedProjects}>
                <h2 className={classes.Title}>Featured Projects</h2>
                <div className={classes.ProjectItems}>
                    <Modal show={this.state.showModal} modalClosed={this.closeModalHandler}>
                        {modalContent}
                    </Modal>
                    <ProjectItem  
                        cover={items[4].cover}
                        altText={items[4].altText}
                        name={items[4].name}
                        date={items[4].date}
                        demo={items[4].demo}
                        srcCode={items[4].srcCode}
                        description={items[4].description}
                        tools={items[4].tools}
                        id={4}
                        projectClicked={this.openModalHandler}
                    />
                    <ProjectItem 
                        cover={items[5].cover}
                        altText={items[5].altText}
                        name={items[5].name}
                        date={items[5].date}
                        demo={items[5].demo}
                        srcCode={items[5].srcCode}
                        description={items[5].description}
                        tools={items[5].tools}
                        id={5}
                        projectClicked={this.openModalHandler}
                    />
                    <ProjectItem 
                        cover={items[7].cover}
                        altText={items[7].altText}
                        name={items[7].name}
                        date={items[7].date}
                        demo={items[7].demo}
                        srcCode={items[7].srcCode}
                        description={items[7].description}
                        tools={items[7].tools}
                        id={7}
                        projectClicked={this.openModalHandler}
                    />
                </div>
                <NavLink 
                    className={classes.LearnMoreText}
                    exact to="/projects"
                >
                    View all projects
                    <IoIosArrowForward className={classes.RightArrowIcon}/>
                </NavLink>
            </div>
        );
    }
}

export default FeaturedProjects;