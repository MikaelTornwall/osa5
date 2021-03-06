import deepFreeze from 'deep-freeze'
import counterReducer from './reducer'

describe('unicafe reducer', () => {
  const initialState = {
    good: 0,
    ok: 0,
    bad: 0,
    accum: 0,
    feedback: 0
  }

  it('should return a proper initial state when called with undefined state', () => {
    const state = {}
    const action = {
      type: 'DO_NOTHING'
    }

    const newState = counterReducer(undefined, action)
    expect(newState).toEqual(initialState)
  })

  it('good is incremented', () => {
    const action = {
      type: 'GOOD'
    }
    const state = initialState

    deepFreeze(state)
    const newState = counterReducer(state, action)
    expect(newState).toEqual({
      good: 1,
      ok: 0,
      bad: 0,
      accum: 1,
      feedback: 1
    })
  })

  it('ok is incremented', () => {
    const action = {
      type: 'OK'
    }
    const state = initialState

    deepFreeze(state)
    const newState = counterReducer(state, action)
    expect(newState).toEqual({
      good: 0,
      ok: 1,
      bad: 0,
      accum: 0,
      feedback: 1
    })
  })

  it('bad is incremented', () => {
    const action = {
      type: 'BAD'
    }
    const state = initialState

    deepFreeze(state)
    const newState = counterReducer(state, action)
    expect(newState).toEqual({
      good: 0,
      ok: 0,
      bad: 1,
      accum: -1,
      feedback: 1
    })
  })

  it('ZERO resets the state', () => {
    const action = {
      type: 'OK'
    }

    const state = initialState

    deepFreeze(state)

    counterReducer(state, action)
    console.log('Increment first ok: ', counterReducer(state, action))

    const action2 = {
      type: 'ZERO'
    }

    deepFreeze(state)

    console.log(state)

    const newState = counterReducer(state, action2)
    console.log(newState)
    expect(newState).toEqual({
      good: 0,
      ok: 0,
      bad: 0,
      accum: 0,
      feedback: 0
    })

  })

})
