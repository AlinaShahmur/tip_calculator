import React, { useEffect, useState } from 'react';
import i18next from 'i18next';
import cookies from 'js-cookie'
import '../App.scss'

export default function Lang(props) {
    let currentLanguageCode = cookies.get('i18next') || 'en';
    const [isEnglish, setIsEnglish] = useState(currentLanguageCode == 'en' ? true : false)

    useEffect(() => {
        document.documentElement.lang = currentLanguageCode;
        document.body.dir = currentLanguageCode === 'he' ? 'rtl' : 'ltr'
    }, [currentLanguageCode])

    let togglerClasses = 'langToggler__toggler '
    togglerClasses += isEnglish ? 'moveRight' : 'moveLeft'

    const chooseLang = (e) => {
        i18next.changeLanguage(e.target.dataset.lang)
        if ( e.target.dataset.lang === 'en') {
            setIsEnglish(true)
        } else {
            setIsEnglish(false);
        }
    }

    return (
        <div className="calc__langToggler langToggler">   
            <div className={togglerClasses}></div>
            <a href = '#' onClick = {chooseLang} data-lang='he' className="langToggler__he">He</a>
            <a href = '#' onClick = {chooseLang} data-lang='en' className="langToggler__en">En</a>
        </div>
    )
}