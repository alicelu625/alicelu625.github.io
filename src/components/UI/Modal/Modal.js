import React, {Component, Fragment} from 'react';

import Backdrop from '../Backdrop/Backdrop';
import classes from './Modal.module.css';

class Modal extends Component {
    /*shouldComponentUpdate(nextProps, nextState) {
        //update if prop changes or its children changes
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
    }*/

    render() {
        return (
            <Fragment>
                <Backdrop show={this.props.show} backdropClicked={this.props.modalClosed}/>
                <div 
                    className={classes.Modal}
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.show ? '1' : '0'
                    }}
                >
                    {this.props.children}
                    <button className={classes.CloseButton} onClick={this.props.modalClosed}>Close</button>
                </div>
            </Fragment>
        );
    }
}

export default Modal;