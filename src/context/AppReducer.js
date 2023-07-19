export default (state, action) => {
  switch (action.type) {
    case 'ADD_MOVIE_TO_WATCHLIST':
      return {
        ...state,
        watchlist: [action.payload, ...state.watchlist]
      }

    case 'REMOVE_MOVIE_FROM_WATCHLIST':
      return {
        ...state,
        watchlist: state.watchlist.filter((movie) => movie.mal_id !== action.payload)
      }

    case 'ADD_MOVIE_TO_WATCHED':
      return {
        ...state,
        watchlist: state.watchlist.filter((movie) => movie.mal_id !== action.payload.mal_id),
        watched: [action.payload, ...state.watched]
      }

    case 'MOVE_TO_WATCHLIST':
      return {
        ...state,
        watched: state.watched.filter((movie) => movie.mal_id !== action.payload.mal_id),
        watchlist: [action.payload, ...state.watchlist]
      }

    case 'REMOVE_FROM_WATCHED':
      return {
        ...state,
        watched: state.watched.filter((movie) => movie.mal_id !== action.payload)
      }

    default:
      return state
  }
}
