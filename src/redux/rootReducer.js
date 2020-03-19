import { combineReducers } from 'redux'
import notesReducer from './notesReducer'
import {reducer as formReducer} from 'redux-form'

export default combineReducers({
    note: notesReducer,
    form: formReducer
})