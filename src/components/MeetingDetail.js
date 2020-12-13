import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box'
import { Button, List, Paper, TextField, Typography  } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from "@material-ui/icons/Delete";


  
function RenderMeeting({meetings,delMeeting}){
  
    if (meetings.length !== 0){
        const metings = meetings.map((meeting) => {
            return(
                <li >
                        <Grid  justify="center" alignItems="center"  container spacing={1} >
                           <Grid item xs={1} >
                               <h5 style={{color:"black"}}>    {meeting.time}</h5>
                            
                            </Grid>
                            <Grid item xs={7} >
                                <h5 style={{color:"black"}}> {meeting.about}</h5>
                            
                            </Grid>
                            <Grid item xs={1} >
                            <IconButton aria-label="Delete" onClick={()=>{delMeeting(meeting.id)}}>
                                <DeleteIcon  color="secondary" />
                            </IconButton>
                          
                            </Grid>
                        
                        </Grid>
                      
                    <hr/>
                </li>
            );
        });
        
      
        return(
            <Grid   justify="center" alignItems="center" container spacing={1}>
                <Grid item xs={12}  spacing={0} alignItems="center" textAlign="center"  direction="column" >
                    <Paper style={{maxHeight: 500, overflow: 'auto'}}>
                        <List className="list-unstyled">
                            {metings}
                        </List>
                    </Paper>
                </Grid>
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
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); 
        var yyyy = today.getFullYear();
        today = dd + ' / ' + mm + ' / ' + yyyy;
        return (
            <Box width={{sm: 480, md: 720 }} height={{sm:480, md:720}} >
                <Grid  container alignItems="start" justify="start">
                    <Grid item xs={12} spacing={0} >
                       
                            <Typography  variant="h3" style={{
                                color: "white"
                            }}>
                                Today's meetings
                            </Typography>
                            <Typography variant="h4" style={{
                                color: "white"
                            }}>
                                {today}
                            </Typography>
                 
                    </Grid>
                </Grid>
                <Box marginBottom={3} border={1} maxHeight="720" borderColor="primary.main"textAlign="center" alignItems="center" justify="center"  >
                  <RenderMeeting meetings={this.props.meetings} delMeeting={this.props.delMeeting} />
                </Box>

               <div Container>
               <Box my={20} display="inline">
                <form onSubmit={this.handleSubmit} justify="center" alignItems="center" >
               
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
                 
                
                        <TextField
                            id="outlined-basic"
                            label="add new meeting"
                            variant="outlined"
                            onChange={this.handleOnChange}
                            required
                            inputProps={{
                                style: {
                                    color: "white"
                                }
                            }}
                            style={{ borderColor: 'white' }}
                            multiline
                            rowsMax={4}
                            padding={4}
                            marginRight="10"
                            size="small"
                            
                        />
                
                        <Button 
                    className="textfield" variant="contained" color="primary" type="submit" size="medium" >Add </Button>
               
                </form>
                </Box>
                </div>
            </Box>
        );
    }
}
 
export default MeetingList;