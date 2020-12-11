import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box'
import { Button, TextField  } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles((theme) => ({
    root: {
       marginRight:20,
       marginLeft:20,
       textAlign:'center',
        
    },
    paper: {
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.primary,
    },
  }));
  
function RenderMeeting({meetings,delMeeting}){
    const classes = useStyles();
    if (meetings!= null){
        const metings = meetings.map((meeting) => {
            return(
                <li>
                 
                    <div className={classes.root}>
                        <Grid justify="center" alignItems="center" container spacing={3} >
                           <Grid item xs={2} >
                                <h5>{meeting.time} </h5>
                            </Grid>
                            <Grid item xs={6} >
                             <h5> {meeting.about}</h5>
                             <hr className="solid"></hr>
                            </Grid>
                            <Grid item xs={2} >
                            <IconButton aria-label="Delete" onClick={()=>{delMeeting(meeting.id)}}>
                                <DeleteIcon />
                            </IconButton>
                            </Grid>
                        </Grid>
                    </div>
                    
                </li>
            );
        });
        return(
           
            <div>
                   <h5 color="text-primary">
                   Todays meetings
               </h5>
                <ul className="list-unstyled">
                    {metings}
                </ul>
            </div>
              
        );
    }else{
        return(
            <div>
                no meetings!
            </div>
        )
    }
}

class MeetingList extends Component {
    constructor(props) {
        super(props);
        this.state={
            about:'',
            time:'07:30',
            id:1
        }
        this.delete = this.delete.bind(this);
        this.handleOnChange=this.handleOnChange.bind(this);
        this.timePicked=this.timePicked.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleOnChange=(e)=>{
        this.setState({
            about: e.target.value
        })
    }
    timePicked= (e) => {
        this.setState({
            time:String(e.target.value)
        })
        console.log(this.state.time)
    }
    delete(){
        this.props.delMeeting(0)
        console.log(this.props.meetings)
    }
   
    handleSubmit= (e)=>{
        this.setState({
            id: this.state.id + 1
        })
        e.preventDefault();
        this.props.addMeeting(
            this.state.about,
            this.state.time,
            this.state.id
        )
    }
  
    render() { 
       
        return (
            <div  color="text.primary" >
                <Box flexDirection='Column'>
                <form onSubmit={this.handleSubmit}>
                <TextField
                    id="time"
                    label="pick the time"
                    type="time"
                    defaultValue="07:30"
                    variant="outlined"
                    InputLabelProps={{
                    shrink: true,
                    }}  
                    inputProps={{
                    step: 60, // 1 min
                    }}
                    onChange={ this.timePicked  }
                />
                   <TextField
                    id="outlined-basic"
                     label="add new meeting"
                      variant="outlined"
                       onChange={this.handleOnChange}
                       endAdornment={
                        <InputAdornment position="end">
                        
                        </InputAdornment>
                      }
                       />
                       <br/>
                    <Button variant="contained" color="primary" type="submit" >Add </Button>
                   
                </form>
                </Box>
                <RenderMeeting meetings={this.props.meetings} delMeeting={this.props.delMeeting} />

               
            </div>
        );
    }
}
 
export default MeetingList;