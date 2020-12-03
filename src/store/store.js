import NoteReducer from '../reducers/NoteReducer';
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    NoteReducer:NoteReducer
})

export default rootReducer;