import React from 'react';
import MovieList from './MovieList.jsx'
import Movie from './Movie.jsx'
import Search from './Search.jsx'
import NewMovie from './NewMovie.jsx'
import Watched from './Watched.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [{title: 'Add a Movie!'}],
      watched: [],
      unwatched: []
    }
  }
  
  getMovies(videos) {
    for(let i = 0; i < this.state.movies.length; i++) {
      if(this.state.movies[i].title === videos) {
        this.setState({movies: [{title: videos}]});
        break;
      }
      this.setState({movies: [{title: 'No movie by that name was found!'}]})
    }
  }

  addMovies(video) {
    if(this.state.movies[0].title === 'Add a Movie!') {
      this.state.movies[0] = ({title: video});
      this.setState({movies: this.state.movies});
      return;
    }
    for(let i = 0; i < this.state.movies.length; i++) {
      if(this.state.movies[i].title === video) {
        alert('This video has already been added!');
        return;
      } 
      this.state.movies.push({title: video});
      console.log(this.state.movies);
      this.setState({movies: this.state.movies});
      return;
    }
    
  }

  addToWatched(videos) {

  }

  render() {
    return (
      <div>
        <h1>Movie List</h1>
        <div>
          <Search handleInputChange={this.getMovies.bind(this)}/>
          <MovieList movies={this.state.movies}/>
          <NewMovie handleInputChange={this.addMovies.bind(this)}/>
          {/* <Watched movies={this.state.movies} handleInputChange={this.addToWatched.bind(this)} /> */}
          
        </div>
      </div>
    );
  }	
}

export default App; 