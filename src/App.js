import React, { Component } from 'react'
import './App.css'

const isNewer = (a, b) => Date.parse(a.added) < Date.parse(b.added)
class App extends Component {
  constructor() {
    super()
    this.state = {
      sortOrder: null,
      songs: [
        { name: 'Should you Return', artist: 'Copeland', added: '2018-01-12' },
        {
          name: 'Kathleen',
          artist: 'Catfish and The Bottle men',
          added: '2018-02-12'
        },
        { name: 'Sleep Well', artist: 'Frontier Sons', added: '2018-03-12' }
      ]
    }
  }
  render() {
    const sorter = this.state.sortOrder === 'added' ? isNewer : undefined

    return (
      <div className="App">
        <div className="pure-button">
          <button
            style={{
              color: this.state.sortOrder === null ? 'red' : 'black',
              fontWeight: this.state.sortOrder === null ? 'bold' : 'normal'
            }}
            onClick={() => this.setState({ sortOrder: null })}
          >
            Natural Sorting
          </button>
          <button
            style={{
              color: this.state.sortOrder === 'added' ? 'red' : 'black',
              fontWeight: this.state.sortOrder === 'added' ? 'bold' : 'normal'
            }}
            onClick={() => this.setState({ sortOrder: 'added' })}
          >
            Time Sorting
          </button>
        </div>
        <ul>
          {this.state.songs
            .slice()
            .sort(sorter)
            .map(song => <li className="li">{song.name}</li>)}
        </ul>
      </div>
    )
  }
}

export default App
