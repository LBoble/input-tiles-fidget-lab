import React, {Component} from 'react';

class RadioInput extends Component {
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
      <li className="RadioInput cards-item">
        <div className="card">
          <div className="card-content">
            <div className="card-title">Radio</div>
            <p className="card-text">
              <div className="input">
                <input type="radio" name="radioInput" value="1" className="checkboxInput" onChange={this.handleChange}/>
                <input type="radio" name="radioInput" value="2" className="checkboxInput" onChange={this.handleChange}/>
                <input type="radio" name="radioInput" value="3" className="checkboxInput" onChange={this.handleChange}/>                  
                <input type="radio" name="radioInput" value="4" className="checkboxInput" onChange={this.handleChange}/>
                <input type="radio" name="radioInput" value="5" className="checkboxInput" onChange={this.handleChange}/>
              </div>
            <div className="output">
              <label for="radioOutput">State: {this.state.number}</label>
              <span name="radioOutput"></span>
            </div>
            </p>
          </div>
        </div>
      </li>
    ) //end return
  }
}

export default RadioInput;