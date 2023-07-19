import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import Moment from 'react-moment'

const ResultCard = ({ movie }) => {
  const { addMovieToWatchlist, addMovieToWatched, watchlist, watched } = useContext(GlobalContext)

  let storedMovie = watchlist.find((o) => o.mal_id === movie.mal_id)
  let storedMovieWatched = watched.find((o) => o.mal_id === movie.mal_id)

  const watchlistDisabled = storedMovie ? true : false
  const watchedDisabled = storedMovieWatched ? true : false

  return (
    <div className='result-card'>
      <div className='poster-wrapper'>
        {movie.images ? (
          <img src={`${movie.images.jpg.image_url}`} alt={`${movie.title} Poster`} />
        ) : (
          <div className='filler-poster' />
        )}
      </div>
      <div className='info'>
        <div className='header'>
          <h3 className='title'>{movie.title}</h3>
          {/* <h4 className='release-date'>
            <Moment format='YYYY'>{movie.release_date}</Moment>
          </h4> */}
        </div>

        <div className='controls'>
          <button className='btn' disabled={watchlistDisabled} onClick={() => addMovieToWatchlist(movie)}>
            Add to Watchlist
          </button>

          <button className='btn' disabled={watchedDisabled} onClick={() => addMovieToWatched(movie)}>
            Add to Watched
          </button>
        </div>
      </div>
    </div>
  )
}

export default ResultCard
