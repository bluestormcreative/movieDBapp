import React from 'react';
import SearchMovies from '../components/searchMovies';

export default function Home() {
    return (
        <div className="page">
            <h2>The MovieDB Search</h2>
            <SearchMovies />
        </div>
    )
}
