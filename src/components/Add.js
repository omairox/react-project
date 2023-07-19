import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ResultCard from './ResultCard'

const Add = () => {
  const [query, setQuery] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [genre, setGenre] = useState([])
  const [animeList, setAnimeList] = useState([])
  const [filteredAnimeList, setFilteredAnimeList] = useState([])
  useEffect(() => {
    const getMovie = async () => {
      try {
        setIsLoading(true)
        const { data } = await axios.get(`https://api.jikan.moe/v4/anime?genres=${genre}`)
        setIsLoading(false)
        setFilteredAnimeList(data.data)
        setAnimeList(data.data)
      } catch (error) {
        setIsLoading(false)
        setAnimeList([])
        console.error(error)
      }
    }
    getMovie()
  }, [genre])

  const onChange = (e) => {
    if (e.target.value !== '') {
      setQuery(e.target.value)
      setFilteredAnimeList(animeList.filter((anime) => anime.title.toLowerCase().startsWith(e.target.value)))
    } else {
      setQuery(e.target.value)
      setFilteredAnimeList(animeList)
    }
  }

  return (
    <div className='add-page'>
      <div className='container'>
        <div className='add-content'>
          <button onClick={() => setGenre('1')} style={{ background: `${genre === '1' ? '#21d07a' : 'inherit'}` }}>
            Action
          </button>
          <button onClick={() => setGenre('8')} style={{ background: `${genre === '8' ? '#21d07a' : 'inherit'}` }}>
            Drama
          </button>
          <button onClick={() => setGenre('2')} style={{ background: `${genre === '2' ? '#21d07a' : 'inherit'}` }}>
            Adventure
          </button>
          <button onClick={() => setGenre('4')} style={{ background: `${genre === '4' ? '#21d07a' : 'inherit'}` }}>
            Comedy
          </button>
          <div className='input-wrapper'>
            <input type='text' placeholder='Search for a anime' value={query} onChange={onChange} />
          </div>
          {isLoading ? (
            'Loading...'
          ) : (
            <ul className='results'>
              {filteredAnimeList.map((movie) => (
                <li key={movie.mal_id}>
                  <ResultCard movie={movie} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  )
}

export default Add
