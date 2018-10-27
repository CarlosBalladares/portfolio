import React, { Fragment } from 'react';
import { CssBaseline } from '@material-ui/core';

import Navbar from './../components/Navbar.js';
import Parallax from './../components/Parallax.js';
import Portfolio from './../components/Portfolio';
import Skills from '../components/Skills.js';

function LandingView(){
  return(
    <CssBaseline>

      <Fragment>
        <Navbar />
        <Parallax />
        <Portfolio id="portfolio" />
        {/* <Skills /> */}
      </Fragment>
    
    </CssBaseline>
  );
}

export default LandingView;