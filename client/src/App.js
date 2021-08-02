import React, {useState} from 'react';
import InputData from './calc/InputData'
import OutputData from './calc/OutputData'
import Formula from './utils/Formula'
import './App.scss';
import Button from './UI/Button';
import { useTranslation } from 'react-i18next';
import Lang from './Lang/Lang';
import ErrorModal from './UI/ErrorModal';

export default function App() {
  const { t } = useTranslation()
  const coefs = [0, 0.01, 0.05, 0.1];
  const rates = [{value: 0, text: t('low')},
                  {value: 1, text: t('satisfy')},
                  {value: 2, text: t('high')},
                  {value: 3, text: t('exceeds_expectations')}]
  const [sum, setSum] = useState(0);
  const [indCoef, setIndCoef] = useState(0);
  const [res, setRes] = useState(0);
  const [error, setError] = useState();

  const languages = [{code: 'en', name: 'English', country_code: 'gb'},
  {code: 'he', name: 'עברית',country_code: 'il', dir:'rtl'},
  {code: 'ru', name: 'Русский',country_code: 'ru'}]

  const handleClick = () => {
    if (inputSumValidation(sum)) {
      setRes(Formula(sum, coefs[indCoef]));
    }
  }

  const changeSumHandler = (e) => {
    setSum(+(e.target.value))
  }
  const changeCoefHandler = (e) => {
    setIndCoef(e.target.value)
  }
  const inputSumValidation = (inputValue) => {
    if (inputValue < 0) {
      setError({title: t("the_input_is_not_valid"), message: t('you_cannot_enter_negative_numbers') })
    } else if (inputValue == '') {
      setError({title: t("the_input_is_not_valid"), message: t('you_did_not_enter_any_value') })
   } else {
    return true
   }
  }
  const onCloseErrorModal = () => {
    setError(null)
  }
    return(
        <div className = "calc">
            {error && <ErrorModal onCloseHandler = {onCloseErrorModal} errorTitle = {error.title} errorMessage = {error.message}/>}
            <InputData rates = {rates} 
                      onChangeSum = {changeSumHandler}
                      onChangeCoef = {changeCoefHandler} />
            <Button btnTitle = {t('calculate')} onClick = {handleClick}/>
            <OutputData result = {res}/>
            <Lang langs = {languages}/>
          </div>
    )
}
