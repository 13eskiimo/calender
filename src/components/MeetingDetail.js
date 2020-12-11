import { Button, Input } from '@material-ui/core';
import React, { Component } from 'react';

import { Control, LocalForm } from 'react-redux-form';

class MeetingList extends Component {
    constructor(props) {
        super(props);
        this.state={
            meeting:''
        }
      
     
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleOnChange=(e)=>{
        this.setState({
            meeting: e.target.value
        })
    }
   handleSubmit= (e)=>{
    e.preventDefault();
    this.props.addMeeting(this.state.meeting)
    console.log(this.props.meetings)
   }
    render() { 
       
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" onChange={this.handleOnChange}/>
                    <button >submit </button>
                </form>

               
            </div>
        );
    }
}
 
export default MeetingList;