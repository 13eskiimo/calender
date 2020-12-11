import React, { Component } from 'react';
import Box from '@material-ui/core/Box';
import { connect } from 'react-redux';
import { addMeeting, delMeeting } from '../redux/actionCreator';
import MeetingList from './MeetingDetail';


const mapStateToProps = (state) =>{
  return{
    meetings: state.meetings
  };
}
const mapDispatchToProps = (dispatch) => ({
  addMeeting: (about,time,id) => dispatch(addMeeting(about,time,id)),
  delMeeting: (id) => dispatch(delMeeting(id))
});

class Main extends Component {


 
  render(){
    return (
        <div>
          <Box display="flex" flexDirection="column" alignItems="stretch" marginX={20}>
              <MeetingList 
              meetings={this.props.meetings}
              addMeeting={this.props.addMeeting}
              delMeeting={this.props.delMeeting}
            />
          </Box>
        </div>
    );
  }
}
 
export default connect(mapStateToProps,mapDispatchToProps)(Main);