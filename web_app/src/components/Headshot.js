import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import portphoto from '../assets/port-photo.jpg';

const styles={
  root:{
    
  },
  photo:{
    width:300
  }
  
}

class Headshot extends Component{
  constructor(props){
    super(props);
  }

  render(){
    const {classes} = this.props;
    return(
      <div className={classes.root}>
        <img src={portphoto} className={classes.photo}/>
      </div>
    );
  }
}

export default withStyles(styles)(Headshot);