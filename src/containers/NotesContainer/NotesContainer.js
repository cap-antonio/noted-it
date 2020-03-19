import React from 'react'
import { connect } from 'react-redux'
import { fetchNotes, deleteNote, addNote, editingModeStart, editingModeFinish } from '../../redux/actions/action-creators'
import Loader from './../../components/Loader/Loader'
import { OneNote } from './OneNote/OneNote'
import style from './NotesContainer.module.css'
import { OneNoteAdder } from './OneNote/OneNoteAdder/OneNoteAdder'

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
      <div className={style.notescontainer}>

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
                <OneNote key={note.id} id={note.id} title={note.title} onDelete={this.props.deleteNote} />
              </div>
            ))}
      </div>
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
    addNote: (title) => dispatch(addNote(title)),
    editingModeStart: () => dispatch(editingModeStart()),
    editingModeFinish: () => dispatch(editingModeFinish())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NotesContainer);
