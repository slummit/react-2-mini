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
      fontColor: 'black',
      fontSize: 12,
      fontFamily: 'monospace',
      allowEdit: true
    };

    this.updateColor=this.updateColor.bind(this);
    this.updateFamily=this.updateFamily.bind(this);
    this.updateSize=this.updateSize.bind(this);
    this.updateEditStatus=this.updateEditStatus.bind(this);
  }

    updateColor(val) {
      this.setState({fontColor: val});  // val could be switched w/ event as parameter and then use event.target.value
    }
  
    updateSize(val) {
      this.setState({fontSize: val});
    }

    updateFamily(val){
      this.setState({fontFamily: val});
    }

    updateEditStatus(val){
      this.setState({allowEdit: val});
    }

  render() {
    const { fontColor, fontSize, fontFamily, allowEdit } = this.state;

    return (
      <div>
        <div className="headerBar">
          <EditToggle allowEdit={allowEdit} update={this.updateEditStatus}/>
          <ColorChanger 
          fontColor={fontColor} 
          update={this.updateColor}
          allowEdit={allowEdit}
          />
          <SizeChanger fontSize={fontSize} update={this.updateSize}/>
          <FamilyChanger fontFamily={fontFamily} update={this.updateFamily}/>
        </div>
        <div className="textArea">
          <TextContainer 
            fontColor={fontColor}
            fontSize={fontSize}
            fontFamily={fontFamily}

          />
        </div>
      </div>
    )
  }
}

export default App;
