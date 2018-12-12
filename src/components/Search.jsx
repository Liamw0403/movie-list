import React from 'react'

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
  }
  
  handleChange(event) {
    this.setState({value: event.target.value});
    // console.log(this.state.value)
  }

  render() {
    return (
      <div>
        <div className='search-bar'> Search
          <form>
            <input className='search-text' placeholder='Search...' type='text' 
                value={this.state.value}
                onChange={this.handleChange.bind(this)}
              ></input>
          </form>
          <input type='submit' onClick={() => this.props.handleInputChange(this.state.value)}></input>
          <button value="Refresh Page" onClick={() => window.location.reload()}>Refresh</button>
        </div>
      </div>
        
    );
  }
}

export default Search;