import React from 'react';

class FlavorFormClassic extends React.Component {

    defaultState = {value: 'coconut'};
    constructor(props) {
      super(props);
      this.state = this.defaultState;
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('Your favorite flavor is: ' + this.state.value);
      this.setState(this.defaultState);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Pick your favorite flavor:
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="grapefruit">Grapefruit</option>
              <option value="lime">Lime</option>
              <option value="coconut">Coconut</option>
              <option value="mango">Mango</option>
            </select>
          </label>
          <p>Current: {this.state.value}</p>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }
  
  
  export default FlavorFormClassic;