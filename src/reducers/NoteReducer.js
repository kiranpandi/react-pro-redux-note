import {ADD_NOTE} from '../actions/NoteAction';
import {REMOVE_NOTE} from '../actions/NoteAction';

const initialState = {
    notes:[]
}

export default function NoteReducer(state = initialState,action){

    switch(action.type){
        case ADD_NOTE:
            return{
                notes:[...state.notes,
                {
                   title: action.title,
                   content:action.content
                }
                ]
            }

        case REMOVE_NOTE:
            return{
                notes: state.notes.filter( (note,index) => index != action.id )
            };
        
        default:
            return state;
    }

} 