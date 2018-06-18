const getId = () => (100000*Math.random()).toFixed(0)

const actionFor = {
  newAnecdote(anecdote) {
    return {
    type: 'NEW_ANECDOTE',
    data: {
      content: anecdote,
      id: getId(),
      votes: 0
    }
  }
},
  addLike(id) {
    return {
      type: 'VOTE',
      id: { id }
    }
  }
}

export default actionFor
