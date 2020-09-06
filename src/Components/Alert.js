import React, {useContext} from 'react';
import {AlertContext} from "../Context/alert/alert.context";
import {CSSTransition} from "react-transition-group";

const Alert = () => {

    const {alert, hide} = useContext(AlertContext)

    return (
        <CSSTransition
            in={alert.visible}
            timeout={200}
            classNames="alert"
            mountOnEnter
            unmountOnExit
        >
            <div className={`alert alert-${alert.type || 'warning'} alert-dismissible`}>
                <strong>Внимание!</strong> {alert.text}
                <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={hide}>
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        </CSSTransition>
    );
};

export default Alert;