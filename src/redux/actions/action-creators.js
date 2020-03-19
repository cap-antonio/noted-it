import { FETCHING_NOTES, FETCHING_OK, FETCHING_ERROR, ADD_NOTE, DELETE_NOTE, EDIT_MODE_START, EDIT_MODE_FINISH } from "./action-types"
import axios from "axios"

const _baseUrl = `https://notes-task-aa80d.firebaseio.com`

export function fetchNotes() {
    return async dispatch => {
        dispatch(fetchNotesStart())
        try {
            const notes = []
            await axios.get(`${_baseUrl}/notes.json`)
            .then(response => {
                for (let key in response.data) {
                    notes.unshift(
                    {
                        ...response.data[key],
                        id: key
                    }
                    )
                }
            })
            
            if (notes.length === 0) {
                return 
            }

            // response.data.map((note) => {
            //     notes.push({
            //         id: note.id,
            //         title: note.title
            //     })
            // })
            dispatch(fetchNotesOk(notes))
        }
        catch (e) {
            dispatch(fetchNotesError(e))
        }
    }
}

export function deleteNote(id) {
    return async dispatch => {
        try {
            const res = await axios.delete(`${_baseUrl}/notes/${id}.json`)
            console.log(res)
            dispatch(fetchNotes())
        }
        catch (e) {
            dispatch(fetchNotesError(e))
        }
    }
}

export function addNote(title) {
    return async (dispatch) => {
        console.log(title)
        try {
            dispatch(noteAdding())
            const res = await axios.post(`${_baseUrl}/notes.json`, title)
            console.log(res)
            dispatch(fetchNotes())
        }
        catch (e) {
            dispatch(fetchNotesError(e))
        }
    }
}

export function noteAdding(noteData) {
    return {
        type: ADD_NOTE,
        noteData
    }
}

export function editingModeStart() {
    return {
        type: EDIT_MODE_START
    }
}

export function editingModeFinish() {
    return {
        type: EDIT_MODE_FINISH
    }
}

export function noteDeleting() {
    return {
        type: DELETE_NOTE,
    }
}

export function fetchNotesStart() {
    return {
        type: FETCHING_NOTES
    }
}

export function fetchNotesOk(notes) {
    return {
        type: FETCHING_OK,
        notes
    }
}

export function fetchNotesError(error) {
    return {
        type: FETCHING_ERROR,
        error
    }
}