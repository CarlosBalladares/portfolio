import React, {Component} from 'react';
import { Parallax as ReactParallax, Background } from 'react-parallax';
import { withStyles } from '@material-ui/core/styles';
import Headshot from './Headshot.js'
import Welcome from './Welcome'
import bg from './../assets/bgclean.png';

const styles={
  parallax:{
    'align-items':'center'
    
  }
}

class Parallax extends Component{
  constructor(props){
    super(props);

  }
  render(){
    const {classes} = this.props

    return(
      <ReactParallax
        bgImage={bg}
        blur={10}
        className={classes.parallax},
        disabled,
        strength={200}
      >
        <Welcome/>
        <div style={{ height: '400px' }} />
      </ReactParallax>
      // <h3>h</h3>
    );

  }
}

export default withStyles(styles)(Parallax);
