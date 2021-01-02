import React, {Component} from 'react';
import {IoIosArrowForward} from 'react-icons/io';
import {ImNewTab} from 'react-icons/im';

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
                        <a href={item.demo}>
                            <button className={classes.Button}>Demo <ImNewTab className={classes.Icon}/></button>
                        </a>
                        <a href={item.srcCode}>
                            <button className={classes.Button}>Source Code <ImNewTab className={classes.Icon}/></button>
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
                        cover={items[3].cover}
                        altText={items[3].altText}
                        name={items[3].name}
                        date={items[3].date}
                        demo={items[3].demo}
                        srcCode={items[3].srcCode}
                        description={items[3].description}
                        tools={items[3].tools}
                        id={3}
                        projectClicked={this.openModalHandler}
                    />
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
                </div>
                <a className={classes.LearnMoreText} href="https://alicezlu.com/projects">View all projects<IoIosArrowForward className={classes.RightArrowIcon}/></a>
            </div>
        );
    }
}

export default FeaturedProjects;