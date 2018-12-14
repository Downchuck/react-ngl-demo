import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Stage } from 'ngl';
/*global Blob*/

// Note viztein makes for a good Viewport wrapper to ngl Stage
// https://github.com/McMenemy/viztein

class App extends Component {
  // paste could be handled more gracefully.
  componentDidMount() {
    document.addEventListener('paste', this.paste);
  }
 componentWillUnount() {
    document.removeEventListener("paste", this.paste)
    this.state.stage.dispose();
  }
  constructor(props) {
    super(props);
    this.state = {stage: null, pdb: null}
    this.paste =() => { setTimeout(() => document.activeElement.blur()); }
  }
  resetStage() {
    if(this.state.stage) {
      this.state.stage.removeAllComponents();
      // FIXME: having a hard time cleaning up the viewport.
      this.setState({stage: null});
    }
  }
  pdb(content, viewportId="viewport") {
    var pdb;
    if(content.files) {
      pdb = content.files[0]
    }
    else {
      if(!content.value.length) return;
      if(content.value.indexOf("HEADER") !== 0) return;
      pdb = new Blob( [ content.value ], { type: 'text/plain'} );
      content.value = "";
    }
    this.setState({stage: new Stage(viewportId)})
    this.setState({pdb});
    setTimeout( () =>
      this.state.stage.loadFile( pdb, { ext: "pdb", defaultRepresentation: true } )
     );
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div id="viewport" style={{width: "100%"}}>
          <img src={logo} id="logo" className="App-logo" alt="logo" style = {{margin: "auto", display: this.state.pdb ? "none" : "block" }} />
          </div>
          <form id="pdbform">
          <label>PDB File<input type="file" id="pdbfile" onChange={(e) => this.pdb(e.target)}  /></label><br />
          <label>Paste PDB: <textarea rows="1" wrap="soft" cols="20" type="text" id="pdbtext" onBlur={(e) => this.pdb(e.target)} /></label>
          <button type="reset" onClick={ (e) => this.resetStage() }>Reset</button>
          </form>
          <a
            className="App-link"
            href="https://github.com/arose/ngl/tree/master/test/data"
            target="_blank"
            rel="noopener noreferrer"
          >
            Example PDB Files
          </a>
        </header>
      </div>
    );
  }
}

export default App;
