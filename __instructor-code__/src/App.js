import React, { Component } from 'react';

// Components
import EditToggle from './components/EditToggle';
import ColorChanger from './components/ColorChanger';
import SizeChanger from './components/SizeChanger';
import FamilyChanger from './components/FamilyChanger';
import TextContainer from './components/TextContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      fontColor: 'green',
      fontSize: 12,
      fontFamily: 'monospace',
      allowEdit: true,
    };
    this.updateColor = this.updateColor.bind(this);
    this.updateFamily = this.updateFamily.bind(this);
    this.updateSize = this.updateSize.bind(this);
  }

  updateColor(val) {
    this.setState({ fontColor: val });
  }

  updateSize(val) {
    this.setState({ fontSize: val });
  }

  updateFamily(val) {
    this.setState({ fontFamily: val });
  }

  // updateEditStatus

  render() {
    console.log('this.state', this.state);

    return (
      <div>
        <div className="headerBar">
          { /* Render EditToggle */ }
          <ColorChanger fontColor={this.state.fontColor} update={this.updateColor} />
          <SizeChanger fontSize={this.state.fontSize} update={this.updateSize} />
          <FamilyChanger fontFamily={this.state.fontFamily} update={this.updateFamily} />
        </div>
        <div className="textArea">
          { /* Render TextContainer */ }
        </div>
      </div>
    )
  }
}

export default App;
