import React, {Component} from 'react';
import { Parallax as ReactParallax, Background } from 'react-parallax';
import { withStyles } from '@material-ui/core/styles';
import Headshot from './Headshot.js'
import Welcome from './Welcome'
import bg from './../assets/halfring4.png';

const styles={
  parallax:{
    'align-items':'center',
    'background-image':`url(${bg})`,
    'background-size':'cover'
  }
}

class Parallax extends Component{
  constructor(props){
    super(props);

  }
  render(){
    const {classes} = this.props

    return(
      <div
        bgImage={bg}
        blur={10}
        className={classes.parallax}
      >
        <Welcome/>
        <div style={{ height: '400px' }} />
      </div>
      // <h3>h</h3>
    );

  }
}

export default withStyles(styles)(Parallax);
