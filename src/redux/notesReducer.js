import { FETCHING_NOTES, FETCHING_OK, FETCHING_ERROR, DELETE_NOTE, ADD_NOTE, EDIT_MODE_FINISH, EDIT_MODE_START } from "./actions/action-types"

const initialState = {
    notes: [],
    loading: false,
    error: null,
    editMode: false,
    newNote: [],
}
export default function NotesReducer(state = initialState, action) {

    switch (action.type) {
        case FETCHING_NOTES:
            return {
                ...state,
                loading: true
            }
        case FETCHING_OK:
            return {
                ...state,
                loading: false,
                notes: action.notes
            }
        case FETCHING_ERROR:
            return {
                loading: false,
                error: action.error
            }
        case DELETE_NOTE:
            return {
                loading: false
            }
        case ADD_NOTE:
            return {
                ...state,
                newNote: {
                    id: action.id,
                    title: action.title
                }
            }

        case EDIT_MODE_START:
            return {
                ...state,
                editMode: true
            }
        case EDIT_MODE_FINISH:
            return {
                ...state,
                editMode: false
            }
        default:
            return state
    }
}

