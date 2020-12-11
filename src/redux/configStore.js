import {createStore} from 'redux'
import {Reducer, initialState } from './reducer'

export const ConfigStore= ()=>{
    const store = createStore(
        Reducer,
        initialState
    )
    return store;
}