import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';


const styles={
  root:{
    'display': 'block',
    'text-align': 'center',
    position:'relative',
    top:'200px'
  },  
}

class Welcome extends Component{
  constructor(props){
    super(props);
  }

  render(){
    const {classes} = this.props;
    return(
      <div className={classes.root}>
        <Typography variant="h3" gutterBottom>Hi my name is Carlos</Typography>
        <Typography variant="h4" gutterBottom color="primary">I'm a software developer</Typography>
        <Typography variant="h4"gutterBottom>Welcome to my online portfolio</Typography>

      </div>
    );
  }
}

export default withStyles(styles)(Welcome);