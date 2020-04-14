import React, { Component } from 'react';
import Post from './Post';

class PostList extends Component {
  state = {
    estados: [
      "um",
      "dois",
      "tres"
    ]
  };

  //conteúdo da classe

  render() {
    return(
      <ul>
        { this.state.estados.map(post => <Post />) }
      </ul>
    );
  }
}

export default PostList;