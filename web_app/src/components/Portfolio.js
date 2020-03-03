import { withStyles } from '@material-ui/core/styles';
import React, { Component } from 'react';
import ImgMediaCard from './Card.js';


const styles={
  root:{
    'background-color': "white",
    position:'relative',
    flex:1,
    // 'text-align':'center',
  },
  cardwrap:{
    display: 'flex',
    'flex-wrap': 'wrap',
    'justify-content': 'center'
  }
}

const portfolioData=[
  {
    thumbnail:require('./../assets/autofica.png'),
    title:"Autofica",    
    desc:'A marketing funnel for auto dealers. This project features a complex form that gathers data and sends emails. Built with amplify, serverless',
    tech:['react', 'aws', 'serverless'],
    demo:'https://www.autofica.com',
    source: 'proprietary'

  },

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
    demo:'https://raytracer3js.herokuapp.com/',
    source: 'https://github.com/CarlosBalladares/webgl-raytracer'
  },

  {
    thumbnail: require('./../assets/shadertoys.png'),
    title: 'Shader toys',
    desc:'These are textures generated procedurally in the fragment shader.I used webgl to accomplish this.',
    tech:['Three.js', 'WebGl', 'Rendering'],
    demo:'https://raytracer3js.herokuapp.com/shaders/',
    source: 'https://github.com/CarlosBalladares/webgl-raytracer/tree/master/public/shaders'
  },

  {
    thumbnail: require('./../assets/shab.png'),
    title: 'Materialize js template',
    desc:'This is a template for an imaginary travel agency website. It features pictures taken in the andes mountains',
    tech:['HTML', 'CSS', 'JS'],
    demo:'https://shab2.herokuapp.com',
    source: 'https://github.com/CarlosBalladares/shab'
  },

  {
    thumbnail: require('./../assets/hackerrank.png'),
    title: 'Hackerrank Interview prep kit problems',
    desc:'These are my solutions with detailed explanations for this problemset ',
    tech:['C++', 'Algorithms'],
    // demo:'https://connectedsoundsapp.herokuapp.com',
    source: 'https://github.com/CarlosBalladares/Hackerrank-interview-preparation-kit-solutions'
  },

  {
    thumbnail: require('./../assets/java_logo.png'),
    title: 'Java Compiler',
    desc:'A Java compiler implemented with a teammate. This project was completed as part of CS411. It supports basic java syntax.',
    tech:['Java', 'Compiler', 'Maven'],
    // demo:'https://connectedsoundsapp.herokuapp.com',
    source: 'https://github.com/CarlosBalladares/Personal-Java-compiler'
  },

  {
    thumbnail: require('./../assets/canary.jpg'),
    title: 'Canary aka MAADC',
    desc:'A smartwatch data collection system. The app collects data from smartwatches and sends it to a sever for analysis.',
    tech:['QA', 'Android', 'Testing'],
    // demo:'https://connectedsoundsapp.herokuapp.com',
    source: 'https://github.com/0x4d464d48/team9cs319'
  },

  {
    thumbnail: require('./../assets/simplecontroller.png'),
    title: 'Gain-Control-VST',
    desc:'Simple proof of concept project to get acquainted with DASP. A gain controller implemented using the JUCE framework. A simple plugin',
    tech:['DSP', 'JUCE', 'C++'],
    // demo:'https://connectedsoundsapp.herokuapp.com',
    source: 'https://github.com/CarlosBalladares/Gain-Control-VST'
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
        <div className={classes.cardwrap}>
        {/* <Typography variant="h4" gutterBottom>Portfolio</Typography> */}
        {
          portfolioData.map( function(item){
            return <ImgMediaCard {...item}></ImgMediaCard>
          })
        }
        </div>
      </div>
    );
  }

}

export default withStyles(styles)(Portfolio);
