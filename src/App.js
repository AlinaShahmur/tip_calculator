import React, {useState} from 'react';
import InputData from './calc/InputData'
import OutputData from './calc/OutputData'
import Formula from './utils/Formula'
import './App.scss';
import Button from './UI/Button';
import { useTranslation } from 'react-i18next';
import Lang from './Lang/Lang';

export default function App() {
  const { t } = useTranslation()
  const coefs = [0, 0.1, 0.15, 0.20];
  const rates = [{value: 0, text: t('low')},
                  {value: 1, text: t('satisfy')},
                  {value: 2, text: t('high')},
                  {value: 3, text: t('exceeds_expectations')}]
  const [sum, setSum] = useState(0);
  const [indCoef, setCoef] = useState(0);
  const [res, setRes] = useState(0);

  const languages = [{code: 'en', name: 'English', country_code: 'gb'},
  {code: 'he', name: 'עברית',country_code: 'il', dir:'rtl'},
  {code: 'ru', name: 'Русский',country_code: 'ru'}]

  const handleClick = () => {
    if (inputSumValidation(sum)) {
      setRes(Formula(sum, coefs[indCoef]));
    }
  }

  const changeSumHandler = (e) => {
    setSum(parseInt(e.target.value))
  }
  const changeCoefHandler = (e) => {
    setCoef(e.target.value)
  }
  const inputSumValidation = (inputValue) => {
   if (inputValue > 0 ) {
    return true
   } else {
     alert('The input is not valid')
   }
  }
  let result = res === 0 ? <span>0</span> :  res
    return(
        <div className = "calc">
          <InputData rates = {rates} 
                    onChangeSum = {changeSumHandler}
                    onChangeCoef = {changeCoefHandler} />
          <Button btnTitle = {t('calculate')} onClick = {handleClick}/>
          <OutputData result = {result}/>
          <Lang langs = {languages}/>
        </div>
    )
}
