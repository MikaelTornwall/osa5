import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import {createStore} from 'redux'
import counterReducer from './reducer'

const store = createStore(counterReducer)

store.subscribe(() => {
 const data = store.getState()
  console.log('Data: ', data)
})

const Statistiikka = ({ reset, good, ok, bad, average, positive }) => {
  const feedback = store.getState().feedback

  if (feedback === 0) {
    return (
      <div>
        <h2>Statistiikka</h2>
        <div>Ei yhtään palautetta annettu</div>
      </div>
    )
  }

  return (
    <div>
      <h2>Statistiikka</h2>
      <div className="table-container">
      <table>
        <tbody>
          <tr>
            <td>Hyvä</td>
            <td>{good}</td>
          </tr>
          <tr>
            <td>Neutraali</td>
            <td>{ok}</td>
          </tr>
          <tr>
            <td>Huono</td>
            <td>{bad}</td>
          </tr>
          <tr>
            <td>Keskiarvo</td>
            <td>{Math.floor(store.getState().accum / feedback * 100) / 100}</td>
          </tr>
          <tr>
            <td>Positiivisia</td>
            <td>{Math.floor(good / feedback * 100)}%</td>
          </tr>
        </tbody>
      </table>
      </div>
      <button className="reset" onClick={reset}>Nollaa tilasto</button>
    </div>
  )
}

class App extends React.Component {

  klik = (e) => {
    return () => {
    store.dispatch({ type: e })
  }
}

  render() {
    return (
      <div className="center">
      <div className="container">
        <h2>Anna palautetta</h2>
        <button className="rate good" onClick={this.klik('GOOD')}>Hyvä</button>
        <button className="rate ok" onClick={this.klik('OK')}>Neutraali</button>
        <button className="rate bad" onClick={this.klik('BAD')}>Huono</button>
        <p></p>

          <Statistiikka
            reset={this.klik('ZERO')}
            good={store.getState().good}
            ok={store.getState().ok}
            bad={store.getState().bad}
          />

      </div>
      </div>
    )
  }
}

const render = () => {
  ReactDOM.render(<App />, document.getElementById('root'));
}

render()
store.subscribe(render)
