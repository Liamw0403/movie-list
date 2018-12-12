import React from 'react';
import Movie from './Movie.jsx';


// class MovieList extends React.Component {
//   constructor(props) {
//     super(props)
//     console.log(movies)
//     this.state = {
//       videos: [],
//       toggled: []
//     }
//   }

//   render({movies}) {
//     return (
//       <div>
//         {movies.map((movie) => 
//       <div>
//         <Movie movie={movie} />
//         <button className='toggle' onClick={this.handleInputChange(this.state.toggle)}>Watched ✓</button>
//       </div>
//     )}
//       </div>
//     );
//   }
// }

var MovieList = ({movies}) => (
  <div className='MovieList'>
    {movies.map((movie) => 
      <div>
        <Movie movie={movie} />
        <button className='toggle' /* onClick={this.handleInputChange(this.state.toggle)}*/>Watched ✓</button>
      </div>
    )}
  </div>
)

export default MovieList;