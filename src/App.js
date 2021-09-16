import './App.css'
import { useState } from 'react'
import FillOptions from './FillOptions'

function App () {
  const [weight, setWeight] = useState(70)
  const [bottles, setBottles] = useState(0)
  const [time, setTime] = useState(0)
  const [gender, setGender] = useState('male')
  const [result, setResult] = useState(0)

  function handleSubmit (e) {
    e.preventDefault()

    let liters = bottles * 0.33
    let grams = liters * 8 * 4.5
    let burningTime = weight / 10
    let gramsLeft = grams - burningTime * time
    let results = 0

    if (gender === 'male') {
      results = gramsLeft / (weight * 0.7)
    } else {
      results = gramsLeft / (weight * 0.6)
    }
    setResult(results)
  }

  return (
    <div>
      <h3>Calculation alcohol blood level</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Weight</label>
          <input
            name='weight'
            type='number'
            step='1'
            value={weight}
            onChange={e => setWeight(e.target.value)}
          ></input>
        </div>
        <div>
          <label>Bottles</label>
          <select
            name='bottles'
            value={bottles}
            onChange={e => setBottles(e.target.value)}
          >
            <FillOptions />
          </select>
        </div>
        <div>
          <label>Time</label>
          <select
            name='time'
            value={time}
            onChange={e => setTime(e.target.value)}
          >
            <FillOptions />
          </select>
        </div>
        <div>
          <label>Gender</label>
          <input
            type='radio'
            name='gender'
            value='male'
            defaultChecked
            onChange={e => setGender(e.target.value)}
          ></input>
          <label>Male</label>
          <input
            type='radio'
            name='gender'
            value='female'
            onChange={e => setGender(e.target.value)}
          ></input>
          <label>Female</label>
        </div>
        <div>
          <output>{result.toFixed(2)}</output>
        </div>
        <button>Calculate</button>
      </form>
    </div>
  )
}

export default App
