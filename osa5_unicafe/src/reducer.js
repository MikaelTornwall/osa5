const initialState = {
  good: 0,
  ok: 0,
  bad: 0,
  accum: 0,
  feedback: 0
}

const counterReducer = (state = initialState, action) => {
//  console.log(action)
  switch (action.type) {
    case 'GOOD':
      return {...state, good: state.good + 1, accum: state.accum + 1, feedback: state.feedback + 1}
    case 'OK':
      return {...state, ok: state.ok + 1, feedback: state.feedback + 1}
    case 'BAD':
      return {...state, bad: state.bad + 1, accum: state.accum - 1, feedback: state.feedback + 1}
    case 'ZERO':
      return {good: 0, ok: 0, bad: 0, accum: 0, feedback: 0}
  }
  return state
}

export default counterReducer
