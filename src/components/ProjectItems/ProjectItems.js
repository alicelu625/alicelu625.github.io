import React, {Component} from 'react';
import {ImNewTab} from 'react-icons/im';

import ProjectItem from './ProjectItem/ProjectItem';
import Modal from '../UI/Modal/Modal';
import classes from './ProjectItems.module.css';

import {items} from './Items';


class ProjectItems extends Component {
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
                    <h3 className={classes.Title}>{item.name}</h3>
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

        return(
            <div className={classes.ProjectItems}>
                <Modal show={this.state.showModal} modalClosed={this.closeModalHandler}>
                    {modalContent}
                </Modal>
                {items.map((item, i) => (
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