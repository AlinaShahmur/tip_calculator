import React from 'react';
import '../App.scss'
import { useTranslation } from 'react-i18next';

export default function InputData(props) {
    const { t } = useTranslation()
    return (
        <React.Fragment>
            <h1>{t('tip_calculator')}</h1>
            <input type = "number" className = 'calc__inpSum' onChange = {props.onChangeSum} placeholder = {t('your_bill')}></input> <br/>
            <h3 className = 'title-h3'>{t('rate_service')}</h3>
            <select className = 'calc__selectRate' onChange = {props.onChangeCoef}> 
              {props.rates.map(item => <option value = {item.value} key = {item.value}>{item.text}</option>)}  
            </select> 
        </React.Fragment>
    )
}
