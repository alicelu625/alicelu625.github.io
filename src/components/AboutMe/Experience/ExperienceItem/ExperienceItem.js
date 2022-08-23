import React, {Component} from 'react';

import classes from './ExperienceItem.module.css';
import {VscTriangleDown} from 'react-icons/vsc';
import {VscTriangleUp} from 'react-icons/vsc';
import {ImLocation} from 'react-icons/im';
import {FaLink} from 'react-icons/fa';

class ExperienceItem extends Component {
    state = {
        showDetails: false
    }

    onToggleShowDetails = () => {
        let prevState = this.state.showDetails;
        this.setState({showDetails: !prevState});
    }

    render() {
        let details = (
            <div className={classes.DetailsDiv} onClick={this.onToggleShowDetails}>
                <p className={classes.DetailsToggle}>
                    Details <VscTriangleDown className={classes.ArrowIcon}/>
                </p>
            </div>
        );

        if (this.state.showDetails) {
            details = (
                <div className={classes.DetailsDiv} onClick={this.onToggleShowDetails}>
                    <p className={classes.Location}><ImLocation/> {this.props.location}</p>
                    <a className={classes.Link} href={this.props.link} target="_blank"><FaLink/> {this.props.link}</a>
                    <div className={classes.DetailsContent}>
                        {this.props.content}
                    </div>
                    <p className={classes.DetailsToggle}>
                        Hide <VscTriangleUp className={classes.ArrowIcon}/>
                    </p>
                </div>
            );
        }

        return (
            <div className={classes.ExperienceItem}>
                <div className={classes.ExperienceDiv}>
                    <div className={classes.LogoDiv}>
                        <img className={classes.Logo} src={this.props.logo} alt={this.props.altText}/>
                    </div>
                    <div className={classes.Header}>
                        <p className={classes.Name}>{this.props.name}</p>
                        <p className={classes.Title}>{this.props.title}</p>
                        <p className={classes.Date}>{this.props.date}</p>
                    </div>
                </div>
                {details}
            </div>
        );
    };
};

export default ExperienceItem;