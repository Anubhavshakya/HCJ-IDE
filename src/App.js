import React, { Component } from 'react';
import {mainCompiler} from './compiler.js';

class App extends Component {
  render() {
    return (
<div id="container">
    <div id="textcontainer">
      <textarea id="codeContent"></textarea><br/>
      <input type="button" className="run" value="run" onClick={mainCompiler}></input>
    </div>
  <div id="iframecontainer">
      <iframe id="showContent"></iframe>
  </div>
</div>
    );
  }
}

export default App;
