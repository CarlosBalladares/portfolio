import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Medium from 'material-ui-next-community-icons/icons/medium';
import Github from 'material-ui-next-community-icons/icons/github-circle';
import Linkedin from 'material-ui-next-community-icons/icons/linkedin';
import Tooltip from '@material-ui/core/Tooltip';
import Hidden from '@material-ui/core/Hidden';






import logo from '../assets/logoblack.png';


const styles = {
  root: {
    flexGrow: 1,
    'backgroundColor':'white',
    boxShadow: 'none',
    display:'flexbox',
    //height:"75px"
  },
  icon:{
    position: 'relative',
    width:50,
    top:-2,
    
  },
  navbavButton:{
    '&:hover':{
      backgroundColor:'transparent'
    }
  },
  iconText:{
    'margin-right':10
  },
  navlinks:{
    flex:1
  },
  tb:{
    'backgroundColor':'white'
  }
};

class Navbar extends Component{
  constructor(props){
    super(props);
  }

  render(){
    const { classes } = this.props;

    return (
      <AppBar 
        position="fixed" 
        className={classes.root}  
        color="white"
      >
        <Toolbar className={classes.tb}>
          <div className={classes.navlinks}>
            <Button disableRipple="true" className={classes.navbavButton}  >
              <img src={logo} className={classes.icon}/>
              <Typography  variant="button"  className={classes.iconText}>
                Carlos Balladares
              </Typography>
            </Button>
            <Hidden smDown >
              <Button href="#portfolio">
                <Typography  variant="button"  >
                  Portfolio
                </Typography>
              </Button>
              <Button>
                <Typography  variant="button"  >
                  Skills
                </Typography>
              </Button>
              <Button>
                <Typography  variant="button"  >
                  Contact
                </Typography>
              </Button>
            </Hidden>
          </div>
          <Hidden className={classes.navicons} smDown>
            <Tooltip title="medium">
              <IconButton color="black" href="https://www.medium.com/@carlosbf" target="_blank" >
                <Medium />
              </IconButton>
            </Tooltip>
            <Tooltip title="github">
              <IconButton color="black" href="https://www.github.com/carlosballadares" target="_blank" >
                <Github />
              </IconButton>
            </Tooltip>
            <Tooltip title="linkedin">
              <IconButton color="black" href="https://www.linkedin.com/in/carlosbf/" target="_blank" >
                <Linkedin />
              </IconButton>
            </Tooltip>
          </Hidden>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles)(Navbar);
