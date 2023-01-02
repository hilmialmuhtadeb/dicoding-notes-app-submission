import React from 'react'
import PropTypes from 'prop-types'
import NoteCard from './NoteCard'
import { Link } from 'react-router-dom'

const NotesList = ({ notes }) => {
  if (!notes.length) {
    return (
      <div className='notes-wrapper empty'>
        <p>There is no notes. Add new note <Link to='/notes/add'>here</Link>.</p>
      </div>)
  }
  
  return (
    <>
      <div className='notes-wrapper'>
        { notes.map(note => (
          <NoteCard note={note} key={note.id} />
        )) }
      </div>
    </>
  )
}

NotesList.propTypes = {
  notes: PropTypes.array.isRequired
}

export default NotesList