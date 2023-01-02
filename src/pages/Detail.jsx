import React, { Component } from 'react'
import { useParams } from 'react-router-dom'
import { archiveNote, getNote, unarchiveNote } from '../utils/data'
import { getReadableDate } from '../utils/date'

function DetailPageWrapper () {
  const { id } = useParams()
  return <Detail id={ id } />
}

class Detail extends Component {
  constructor(props) {
    super(props)

    this.state = {
      note: getNote(props.id)
    }
  }
  
  render() {
    return (
      <div className='detail-page-wrapper'>
        <h1>{this.state.note.title}</h1>
        <p>{ getReadableDate(this.state.note.createdAt) }</p>
        <p className='text-body'>{this.state.note.body}</p>
        <div className="action-wrapper">
          {
            this.state.note.archived ?  (
              <button onClick={() => unarchiveNote(this.state.note.id)}>Unarchive</button>
            ) : (
              <button onClick={() => archiveNote(this.state.note.id)}>Archive</button>
            )
          }
          <button>Delete</button>
        </div>
      </div>
    )
  }
}

export default DetailPageWrapper