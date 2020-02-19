import React, { Fragment } from 'react';
import Card from './movieCard';

export default function SearchResults(props) {
    const {movies} = props;
    return (
        <Fragment>
            {movies && movies.map((movie) => (
                <Card
                    className="card"
                    key={movie.id}
                    movie={movie}
                />
            ))}
        </Fragment>
    )
}
