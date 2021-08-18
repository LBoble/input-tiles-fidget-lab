import React, {Component} from 'react';

class RangeInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: null
    }
  };

  handleChange = (event) => {
    this.setState({"number": event.target.value})
  }

  render() {
    return(
      <li className="RangeInput cards-item">
            <div className="card">
              <div className="card-content">
                <div className="card-title">Range Slider</div>
                <p className="card-text">
                  <div className="input">
                    <input type="range" className="rangeInput" />
                  </div>
                  <div className="output">
                    <label for="rangeOutput">State: </label>
                    <span name="rangeOutput"></span>
                  </div>
                </p>
              </div>
            </div>
          </li>
    ) 
  }
}

export default RangeInput;