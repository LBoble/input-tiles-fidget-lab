import React, {Component} from 'react';

class SelectInput extends Component {
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
      <li className="SelectInput cards-item">
            <div className="card">
              <div className="card-content">
                <div className="card-title">Select</div>
                <p className="card-text">
                  <div className="input">
                    <select className="selectInput">
                      <option value="">Choose one:</option>
                      <option value="Dog">Dog</option>
                      <option value="Cat">Cat</option>
                      <option value="Rabbit">Rabbit</option>
                      <option value="Fish">Fish</option>
                      <option value="Horse">Horse</option>
                    </select>
                  </div>
                  <div className="output">
                    <label for="selectOutput">Image: </label>
                    <span name="selectOutput"></span>
                  </div>
                </p>
              </div>
            </div>
          </li>
    ) 
  }
}

export default SelectInput;