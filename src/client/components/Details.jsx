import React, { Component } from 'react';

export class DetailsComponent extends Component {
  constructor(props) {
    super(props);
    this.onChangeValue = this.onChangeValue.bind(this);
  }
  
  onChangeValue(event) {
   this.props.setStyle && this.props.setStyle({backgroundColor: event.target.value});
   this.props.onClose && this.props.onClose();
  }

  render() {
    return (
      <div className="modal-box">
          Properties
          Choose color
          <div className= "color-selector" onChange={this.onChangeValue}>
            <input type="radio" value="Green" name="color" /> Green
            <input type="radio" value="Red" name="color" /> Red
            <input type="radio" value="Blue" name="color" /> Blue
          </div>
          <button onClick={this.props.onClose}>Close</button>
      </div>
    )
  }
}
export default DetailsComponent;