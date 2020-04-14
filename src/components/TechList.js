import React, { Component } from 'react';
import TechItem from './TechItem';

class TechList extends Component {
  state = {
    techs: [
      'Node',
      'React',
      'React Native'
    ]
  };
  
  render() {
    console.log(this.state);
    return(
      <ul>
        { this.state.techs.map(tech => (
          <TechItem key={tech} tech={tech}/>
        )) }
      </ul>
    );
  }
}

export default TechList;