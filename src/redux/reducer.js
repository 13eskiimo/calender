import * as ActionTypes from './actionTypes';

import {MEETINGS} from '../shared/meetings';

export const initialState = {
    meetings :MEETINGS
}

export const Reducer = (state= initialState,action)=>{
    switch (action.type) {
        
    case ActionTypes.ADD_MEETING:
        var meeting = action.payload;
        return { 
            ...state,
            meetings: state.meetings.concat(meeting)
        };

    case ActionTypes.DEL_MEETING:
        var id = action.payload.id
        // console.log(`id ${id}`)
        return {
            ...state,
            meetings: state.meetings.filter(meeting=> meeting.id !== id)
        };
    //    return state.meetings.filter(meeting => meeting.id!==action.payload.id)
    
    default:
        return state;
    }
}