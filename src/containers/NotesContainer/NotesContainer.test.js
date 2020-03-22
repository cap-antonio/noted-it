import React from 'react'
import NotesReducer from '../../redux/notesReducer'
import { addNote, fetchNotes } from '../../redux/actions/action-creators'
import NotesContainer from './NotesContainer'


it(`Notes should be fetched`, () => {

    // 1. Test note adding
    let action = addNote("TestTest")
    let state = {
        notes: []
    }

    // 2. Action
    let newState = NotesReducer(state, action)

    // 3. Expectation
    expect(newState.notes.length).toBe(1);
})