import React, { Component } from 'react'
import { withStyles } from 'material-ui';
import Typography from '@material-ui/core/Typography';


const styles={
  root:{
    height:'300px'
  },
  skillswrap:{

  },
  title:{
    textDecoration: 'underline'
  }
}
class Skills extends Component{
  constructor(props){
    super(props);
  }
  
  render(){
    const {classes} = this.props;
    return(
      <div className={classes.root}>
        <Typography variant="h4" className={classes.title}>Skills</Typography>
        <div className={classes.skillswrap}>
          <h2>h</h2>
        </div>
      </div>
    );
  } 
}

export default withStyles(styles)(Skills);