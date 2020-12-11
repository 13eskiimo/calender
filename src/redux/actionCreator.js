import * as ActionTypes from './actionTypes';

export const addMeeting = (about)=> ({
    type: ActionTypes.ADD_MEETING,
    payload: {
       id: 5,
       time: '5:00 AM',
       about: about
    },
 });
 