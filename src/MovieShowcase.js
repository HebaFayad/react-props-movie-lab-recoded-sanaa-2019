import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
const a=movieData.map(item => <MovieCard title={item.title} IMDBRating={item.IMDBRating} genres={item.genres} poster={item.poster}/>)
return a
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
© 2019 GitHub, Inc.