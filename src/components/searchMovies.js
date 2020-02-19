import React, { useState } from 'react';
import SearchResults from './searchResults';

export default function SearchMovies() {
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const url = `https://api.themoviedb.org/3/search/movie?api_key=c1a352a073f469b569d04c5037b0c67f&language=en-US&query=${query}`;
        const results = await fetch(url);
        const data = await results.json();

        setMovies(data.results);

        console.log(data); // eslint-disable-line no-console
    };
    return (
      <div>
          <h3>Search For A Movie</h3>
          <form className="movie-search" onSubmit={handleSubmit}>
              <label
                htmlFor="query"
                className="screenreader">
                    Query
                </label>
              <input
                type="text"
                name="query"
                id="query"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Enter a movie title"
                />
              <button type="submit">Search!</button>
          </form>
          <SearchResults movies={movies} />
      </div>
    )
}
