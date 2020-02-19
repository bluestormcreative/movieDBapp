import React from 'react';
import Poster from './poster';

export default function Card(props) {
    const {movie} = props;
    const releaseDate = new Date(movie.release_date);
    const releaseYear = releaseDate.getFullYear();
    return (
        <div className="card">
            {!!movie.poster_path &&
                <Poster
                    path={movie.poster_path}
                    alt={movie.title}
                />
            }
            <div className="card--text">
                <h3>{movie.title}</h3>
                <p className="card--rating">RATING: {movie.vote_average} | RELEASE: {releaseYear}</p>
                <p className="overview">{movie.overview}</p>
            </div>
        </div>
    )
}
