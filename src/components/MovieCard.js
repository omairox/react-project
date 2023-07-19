import React from 'react'
import MovieControls from './MovieControls'

const MovieCard = ({ movie, type }) => {
  return (
    <div className='movie-card'>
      <div className='overlay'></div>

      {movie.images ? (
        <img src={`${movie.images.jpg.image_url}`} alt={`${movie.title} Poster`} />
      ) : (
        <div className='filler-poster' />
      )}

      <MovieControls type={type} movie={movie} />
    </div>
  )
}

export default MovieCard
