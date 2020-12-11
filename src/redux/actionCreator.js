import * as ActionTypes from './actionTypes';

export const addMeeting = ( about , newtime,id ) => ({
    type: ActionTypes.ADD_MEETING,
    payload: {
       id: id,
       time: newtime,
       about: about
    },
 });
 
 export const delMeeting = ( id ) => ({
   type: ActionTypes.DEL_MEETING,
   payload: {
      id: id,
   },
});
