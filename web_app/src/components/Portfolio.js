import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import ImgMediaCard from'./Card.js';
import Typography from '@material-ui/core/Typography';


const styles={
  root:{
    'background-color': "white",
    position:'relative',
    flex:1,
    display: 'flex',
    'flex-wrap': 'wrap'
  }
}

const portfolioData=[
  {
    thumbnail: require('./../assets/image-14.jpg'),
    title: 'Connected sounds',
    desc:'A website for an online music label. Connected sounds is an attempt to bring material design to music together.',
    tech:['react', 'node.js', 'heroku'],
    demo:'https://connectedsoundsapp.herokuapp.com',
    source: 'https://github.com/CarlosBalladares/connected-new-website'
  },
  {
    thumbnail: require('./../assets/raytracer-thumb.png'),
    title: 'RayTracer scene',
    desc:'A 3d scene rendered using ray tracing, Phong shading and other illumination models',
    tech:['Three.js', 'WebGl', 'Rendering'],
    demo:'https://connectedsoundsapp.herokuapp.com',
    source: 'https://github.com/CarlosBalladares/connected-new-website'
  },

  {
    thumbnail: require('./../assets/shadertoys.png'),
    title: 'Shader toys',
    desc:'These are textures generated procedurally in the fragment shader.I used webgl to accomplish this.',
    tech:['Three.js', 'WebGl', 'Rendering'],
    demo:'https://connectedsoundsapp.herokuapp.com',
    source: 'https://github.com/CarlosBalladares/connected-new-website'
  },

  {
    thumbnail: require('./../assets/shab.png'),
    title: 'Materialize js template',
    desc:'This is a template for an imaginary travel agency website. It features pictures taken in the andes mountains',
    tech:['HTML', 'CSS', 'JS'],
    demo:'https://connectedsoundsapp.herokuapp.com',
    source: 'https://github.com/CarlosBalladares/connected-new-website'
  },

  {
    thumbnail: require('./../assets/hackerrank.png'),
    title: 'Hackerrank Interview prep kit problems',
    desc:'This are my solutions with detailed explanations for this problemset ',
    tech:['C++', 'Algorithms'],
    demo:'https://connectedsoundsapp.herokuapp.com',
    source: 'https://github.com/CarlosBalladares/connected-new-website'
  },

  {
    thumbnail: require('./../assets/java_logo.png'),
    title: 'Java Compiler',
    desc:'A Java compiler implemented with a teammate. This project was completes as part of CS411. It supports basic java syntax.',
    tech:['Java', 'Compiler', 'Maven'],
    demo:'https://connectedsoundsapp.herokuapp.com',
    source: 'https://github.com/CarlosBalladares/connected-new-website'
  },

  {
    thumbnail: require('./../assets/canary.jpg'),
    title: 'Canary aka MAADC',
    desc:'A smartwatch data collection system. The app collects data from smartwatches and sends it to a sever for analysis.',
    tech:['QA', 'Android', 'Testing'],
    demo:'https://connectedsoundsapp.herokuapp.com',
    source: 'https://github.com/CarlosBalladares/connected-new-website'
  },

  {
    thumbnail: require('./../assets/simplecontroller.png'),
    title: 'Gain-Control-VST',
    desc:'Simple proof of concept project to get acquainted with DASP. A gain controller implemented using the JUCE framework. A simple plugin',
    tech:['DSP', 'JUCE', 'C++'],
    demo:'https://connectedsoundsapp.herokuapp.com',
    source: 'https://github.com/CarlosBalladares/connected-new-website'
  },



]

class Portfolio extends Component{

  constructor(props){
    super(props);

  }
  render(){
    const {classes} = this.props
    return(
      <div className={classes.root}>
        {/* <Typography variant="h4" gutterBottom>Portfolio</Typography> */}
        {
          portfolioData.map( function(item){
            return <ImgMediaCard {...item}></ImgMediaCard>
          })
        }
      </div>
    );
  }

}

export default withStyles(styles)(Portfolio);
