import React from 'react';
import '../App.scss'

export default function InputData(props) {
    return (
        <React.Fragment>
            <h1>מחשבון טיפים</h1>
            <input className = 'calc__inpSum' onChange = {props.onChangeSum} placeholder = 'הזין/נ סכום'></input> <br/>
            <h3 className = 'title-h3'> הערך/י איכות השירות</h3>
            <select className = 'calc__selectRate' onChange = {props.onChangeCoef}> 
              {props.rates.map(item => <option value = {item.value} key = {item.value}>{item.text}</option>)}  
            </select> 
        </React.Fragment>
    )
}
