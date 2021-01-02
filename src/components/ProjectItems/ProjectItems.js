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

            if (item.srcCode !== null) {
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
            } else {
                modalContent = (
                    <div className={classes.Modal}>
                        <h3 className={classes.Name}>{item.name}</h3>
                        <p className={classes.Date}>{item.date}</p>
                        <p className={classes.InProgress}>Project in progress.</p>
                        <p className={classes.Content}><strong>Description: </strong>{item.description}</p>
                        <p className={classes.Content}><strong>Current Progress: </strong>{item.tools}</p>
                    </div>
                );
            }
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