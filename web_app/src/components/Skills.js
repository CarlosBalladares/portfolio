import React, { Component } from 'react'
import { withStyles } from 'material-ui';
import Typography from '@material-ui/core/Typography';


const styles={
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
        <Typography variant="h4" className={classes.title}>Skills</Typography>
    );
  } 
}

export default withStyles(styles)(Skills);