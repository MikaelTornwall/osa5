import React from 'react';
import actionFor from './actionCreators'


class App extends React.Component {

  addAnecdote = (event) => {
    event.preventDefault()
    const anecdote = event.target.anecdote.value
    console.log("Input value: ", anecdote)
    this.props.store.dispatch(
      actionFor.newAnecdote(anecdote)
    )
    event.target.anecdote.value = ''
  }

  addVote = (id) => () => {
    console.log("Id: ", id)
    this.props.store.dispatch(
      actionFor.addLike(id)
    )
  }

  render() {
    const anecdotes = this.props.store.getState().sort((a, b) => b.votes - a.votes)
    return (
      <div>
        <h2>Anecdotes</h2>
        {anecdotes.map(anecdote=>
          <div key={anecdote.id}>
            <div>
              {anecdote.content}
            </div>
            <div>
              has {anecdote.votes}
              <button onClick={this.addVote(anecdote.id)}>Vote</button>
            </div>
          </div>
        )}
        <h2>Create new</h2>
        <form onSubmit={this.addAnecdote}>
          <div><input name="anecdote" /></div>
          <button>Create</button>
        </form>
      </div>
    )
  }
}

export default App
