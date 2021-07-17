import React from 'react';
import './ErrorModal.scss'
import Button from './Button'
import { useTranslation } from 'react-i18next';
export default function ErrorModal(props) {
    const { t } = useTranslation();
    return (    <React.Fragment>
                    <div className = "backdrop"></div>
                    <div className = "error-modal">
                        <div className = 'error-modal__header'>
                            <h3>{props.errorTitle}</h3>
                        </div>
                        <div className = 'error-modal__body'>
                            <p>{props.errorMessage}</p>  
                            <Button onClick = {props.onCloseHandler} btnTitle = {t("Close")}/>                       
                        </div>
                    </div>
                </React.Fragment>
                )
}