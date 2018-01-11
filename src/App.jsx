/*
 *
 * App
 *
 */
import React, { Component } from 'react';
import Vega from 'react-vega';

import _reject from 'lodash/reject';

import  { treeOne, treeTwo, treeSpec } from './Constants';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      treeData: {
        tree: treeTwo
      }
    };

    this.setTreeOneFourNodes = this.setTreeOneFourNodes.bind(this);
    this.setTreeOneFiveNodes = this.setTreeOneFiveNodes.bind(this);
    this.setTreeTwo = this.setTreeTwo.bind(this);
  }

  setTreeOneFourNodes() {
    const treeOnefourNodes = _reject(treeOne, {'id': "4"});

    this.setState({
      treeData: {
        tree: treeOnefourNodes.concat()
      }
    });
  }

  setTreeOneFiveNodes() {
    this.setState({
      treeData: {
        tree: treeOne.concat()
      }
    });
  }

  setTreeTwo() {
    this.setState({
      treeData: {
        tree: treeTwo.concat()
      }
    });
  }

  render() {
    const { treeData } = this.state;

    return (
      <div className="App">
        <button type="button" onClick={this.setTreeOneFourNodes} >Tree one: filter node</button>
        <button type="button" onClick={this.setTreeOneFiveNodes} >Tree one complete</button>
        <button type="button" onClick={this.setTreeTwo} >Tree two</button>
        <Vega spec={treeSpec} data={treeData} />
        <h2>Spec</h2>
        <pre>
{JSON.stringify(treeSpec, null, 2)}
        </pre>
        <h2>Data</h2>
        <pre>
{JSON.stringify(treeData, null, 2)}
        </pre>
      </div>
    );
  }
}

export default App;