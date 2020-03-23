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
                if(response.data === null) {
                    dispatch(fetchNotesOk(notes))
                }
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
            await axios.delete(`${_baseUrl}/notes/${id}.json`)
            dispatch(fetchNotes())
        }
        catch (e) {
            dispatch(fetchNotesError(e))
        }
    }
}

export function addNote(data) {
    return async (dispatch) => {
        try {
            // dispatch(noteAdding())
            await axios.post(`${_baseUrl}/notes.json`, data)
            dispatch(fetchNotes())
        }
        catch (e) {
            dispatch(fetchNotesError(e))
        }
    }
}

export function putEditNote(id, Data) {
    return async dispatch => {
        try {
            dispatch(fetchNotesStart())
            await axios.put(`${_baseUrl}/notes/${id}.json`, Data)
            dispatch(fetchNotes())
        } catch (e) {
            dispatch(fetchNotesError(e))
        }
    }
}

export function setNewColor(id, newData) {
    return async dispatch => {
        try {
            console.log(id, newData)
            dispatch(fetchNotesStart())
            await axios.put(`${_baseUrl}/notes/${id}.json`, newData)
            dispatch(fetchNotes())
        } catch (e) {
            dispatch(fetchNotesError(e))
        }
    }
}

export function noteAdding() {
    console.log(ADD_NOTE)
    return {
        type: ADD_NOTE
    }
}

export function editingModeStart() {
    console.log(EDIT_MODE_START)

    return {
        type: EDIT_MODE_START
    }
}

export function editingModeFinish() {
    console.log(EDIT_MODE_FINISH)

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
    console.log(FETCHING_NOTES)

    return {
        type: FETCHING_NOTES
    }
}

export function fetchNotesOk(notes) {
    console.log(FETCHING_OK)

    return {
        type: FETCHING_OK,
        notes
    }
}

export function fetchNotesError(error) {
    console.log(FETCHING_ERROR)

    return {
        type: FETCHING_ERROR,
        error
    }
}