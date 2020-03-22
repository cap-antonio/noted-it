import React from 'react'
import { connect } from 'react-redux'
import { fetchNotes, deleteNote, addNote, editingModeStart, editingModeFinish, putEditNote, setNewColor } from '../../redux/actions/action-creators'
import Loader from './../../components/Loader/Loader'
import { OneNote } from './OneNote/OneNote'
import { OneNoteAdder } from './OneNote/OneNoteAdder/OneNoteAdder'
import styled from 'styled-components'

const Main = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-top: 1rem;
`

class NotesContainer extends React.Component {
  componentDidMount = async () => {
    this.props.fetchNotes()
  }
  adder = (
    <button className="btn btn-primary float-left" onClick = {this.props.editingModeStart}>
      <i className="fas fa-plus-circle" />
    </button>
  )
  render() {
    return (
      <Main>
        {/* Add button */}
        <div className="col-sm-3 mb-3">
          {this.props.editMode
            ? <OneNoteAdder editingModeFinish = {this.props.editingModeFinish} addNote = {this.props.addNote} 
                notes = {this.props.notes} fetchNotes = {this.props.fetchNotes}/>
            : this.adder}
        </div>

        {/* Notes Container if they are */}
        
        {this.props.notes.length === 0
          ? null
          : this.props.loading
            ? <Loader />
            : this.props.notes.map((note) => (
              <div className="col-sm-3 mb-3" key={Math.random()}>
                <OneNote key={note.id} id={note.id} note={note.title} color = {note.color} onDelete={this.props.deleteNote} 
                  editingModeFinish = {this.props.editingModeFinish} addNote = {this.props.addNote}
                  putEditNote = {this.props.putEditNote} setNewColor = {this.props.setNewColor}/>
              </div>
            ))}
      </Main>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    notes: state.note.notes,
    loading: state.note.loading,
    editMode: state.note.editMode
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchNotes: () => dispatch(fetchNotes()),
    deleteNote: (id) => dispatch(deleteNote(id)),
    addNote: (data) => dispatch(addNote(data)),
    editingModeStart: () => dispatch(editingModeStart()),
    editingModeFinish: () => dispatch(editingModeFinish()),
    putEditNote: (id, Data) => dispatch(putEditNote(id, Data)),
    setNewColor: (id, newData) => dispatch(setNewColor(id, newData))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NotesContainer);
