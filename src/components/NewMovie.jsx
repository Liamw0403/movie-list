import React from 'react';

class NewMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }
  render() {
    return (
      <div>
        <form>
          <input className='search-text' type='text' placeholder='Add movie'
            value={this.state.value}
            onChange={this.handleChange.bind(this)}
          ></input>
        </form>
        <input type='submit' onClick={() => this.props.handleInputChange(this.state.value)}></input>
      </div>
    );
  }
}




export default NewMovie;