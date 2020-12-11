import React, { Component } from 'react';
import Box from '@material-ui/core/Box';
import { connect } from 'react-redux';
import { addMeeting } from '../redux/actionCreator';
import MeetingList from './MeetingDetail';


const mapStateToProps = (state) =>{
  return{
    meetings: state.meetings
  };
}
const mapDispatchToProps = (dispatch) => ({
  addMeeting: (about) => dispatch(addMeeting(about)),
 
});

class Main extends Component {


 
  render(){
    return (
        <div>
         <MeetingList meetings={this.props.meetings} addMeeting={this.props.addMeeting}/>
        </div>
    );
  }
}
 
export default connect(mapStateToProps,mapDispatchToProps)(Main);