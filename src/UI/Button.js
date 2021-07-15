import React from 'react';
import './Button.scss'
export default function Button(props) {
    return <button onClick = {props.onClick}>{props.btnTitle}</button>
}