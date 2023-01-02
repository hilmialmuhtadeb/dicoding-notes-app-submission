import React, { Component } from 'react'
import NotesList from '../components/NotesList'
import SearchBar from '../components/SearchBar'
import { getActiveNotes } from '../utils/data'

export class Notes extends Component {
  constructor(props) {
    super(props)

    this.state = {
      notes: getActiveNotes()
    }
  }
  
  render() {
    return (
      <>
        <h1>Active Notes</h1>
        <div className='toolbar-wrapper'>
          <SearchBar />
          <button>Add Note</button>
        </div>
        <NotesList notes={this.state.notes} />
      </>
    )
  }
}

export default Notes