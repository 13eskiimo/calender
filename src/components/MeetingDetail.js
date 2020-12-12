import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box'
import { Button, TextField, Typography  } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
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
    if (meetings.length !== 0){
        const metings = meetings.map((meeting) => {
            return(
                <li>
                    <div className={classes.root}>
                        <Grid justify="center" alignItems="center" container spacing={2} >
                           <Grid item xs={2} >
                               <h5>{meeting.time} </h5>
                            </Grid>
                            <Grid item xs={8} >
                             <h5> {meeting.about}</h5>
                          
                            </Grid>
                            <Grid item xs={2} >
                            <IconButton aria-label="Delete" onClick={()=>{delMeeting(meeting.id)}}>
                                <DeleteIcon />
                            </IconButton>
                          
                            </Grid>
                        
                        </Grid>
                        <hr/>
                    </div>
                    
                </li>
            );
        });
        
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();
        today = mm + '/' + dd + '/' + yyyy;
        return(
            <Grid   justify="center" alignItems="center" container spacing={2}>
                 <Grid item xs={12} sm={8} spacing={0}   direction="column" >
             
                    <Typography  variant="h3" style={{
                        color: "white"
                    }}>
                        Today's meetings
                    </Typography>
                    <Typography style={{
                        color: "white"
                    }}>
                        {today}
                    </Typography>
               
                            </Grid>
               
                <ul className="list-unstyled">
                    {metings}
                </ul>
            </Grid>
              
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
                
                <RenderMeeting meetings={this.props.meetings} delMeeting={this.props.delMeeting} />
               <div Container>
                <form onSubmit={this.handleSubmit} spacing={1} justify="center" alignItems="center" >
                <Box my={1} display={{xs:"block" , sm: "inline"}}>
                    <TextField
                    className="textfield"
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
                        size="small"
                    />
                    </Box>
                 <Box mx={2}my={1}display={{xs:"block" , sm: "inline"}}>
                        <TextField
                        className="textfield"
                        id="outlined-basic"
                            label="add new meeting"
                            variant="outlined"
                            onChange={this.handleOnChange}
                            required
                            
                            multiline
                            rows={4}
                            padding={4}
                            marginRight="10"
                        />
                  </Box>
                  <Box  display={{xs:"block" , sm: "inline"}}>
                        <Button 
                    className="textfield" variant="contained" color="primary" type="submit" size="large" >Add </Button>
                 </Box>
                </form>
                </div>
            </div>
        );
    }
}
 
export default MeetingList;