import { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Stadistics = (props) => {

  if (props.totalM.length === 0) {
    return (
      <div>
        <p>the app is used by pressing the buttons</p>
      </div>
    )
  }
  console.log(props.totalM)
  let totalAvrg = 0

  props.totalM.map(value => totalAvrg+=value)

  const resultado = totalAvrg / props.totalM.length;  
  let positiveRatio = (props.good/props.total)*100
 
  return(
    <table>
      <tbody>
        <StadisticLine text="Good" value={props.good}/>
        <StadisticLine text="Neutral" value={props.neutral}/>
        <StadisticLine text="Bad" value={props.bad}/>
        <StadisticLine text="Average" value={resultado}/>
        <StadisticLine text="Total" value={props.total}/>
        <StadisticLine text="Positive (%)" value={positiveRatio} />
      </tbody>
    </table>
  )
}

const StadisticLine = (props) => {
  return(
    <tr>
        <td>{props.text}:</td>
        <td>{props.value}</td>
      </tr>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [avrg, setAvrg] = useState([])
  const [total, setTotal] = useState(0)

  const handleSetGood = () => {
    setGood(good + 1)
    setAvrg(avrg.concat(1))
    const updatedGood = good + 1 
    setTotal(neutral + updatedGood + bad)
  }

  const handleSetNeutral = () => {
    setNeutral(neutral + 1)
    setAvrg(avrg.concat(0))
    const updatedNeu = neutral + 1 
    setTotal(good + updatedNeu + bad)
  }

  const handleSetBad = () => {
    setBad(bad + 1)
    setAvrg(avrg.concat(-1))
    const updatedBad = bad + 1 
    setTotal(good + updatedBad + neutral)
  }

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button handleClick={handleSetGood} text='Good' />
      <Button handleClick={handleSetNeutral} text='Neutral' />
      <Button handleClick={handleSetBad} text='Bad' />
      <h2>Stadistics</h2>
      <Stadistics 
        totalM={avrg} 
        good={good}
        neutral={neutral}
        bad={bad}
        total={total}
      />
    </div>


  )
}

export default App
