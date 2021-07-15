import React, {useState} from 'react';
import InputData from './calc/InputData'
import OutputData from './calc/OutputData'
import Formula from './utils/Formula'
import './App.scss';
import Loading from './UI/loading';
import Card from './UI/Card';
import Button from './UI/Button';

export default function App() {
  const coefs = [0.1, 0.15, 0.2, 0.25];
  const rates = [{value: 0, text: 'נמוכה'},
                  {value: 1, text: 'מספקת'},
                  {value: 2, text: 'גבוהה'},
                  {value: 3, text: 'מעל הצופה'}]
  const [sumVal, setSum] = useState(0);
  const [indCoef, setCoef] = useState(0);
  const [res, setRes] = useState(0);
  const [loading, setLoading] = useState(false)

  const handleClick = () => {
    setLoading(true)
    setTimeout(() => {
      setRes(Formula(sumVal, coefs[indCoef]));
      setLoading(false)
    }, 2000)
  }
  const changeSumHandler = (e) => {
    setSum(parseInt(e.target.value))
  }
  const changeCoefHandler = (e) => {
    setCoef(e.target.value)
  }

  let result = res === 0 ? <span>0</span> :  res
    return(
      <Card>
        <div className = "calc">
          <InputData rates = {rates} 
                    onChangeSum = {changeSumHandler}
                    onChangeCoef = {changeCoefHandler} />
          <Button btnTitle = 'חשב' onClick = {handleClick}/>
          <OutputData result = {result}/>
          {loading && <Loading/>}
        </div>
      </Card>
    )
}
