import React, { Fragment } from 'react';

export default function Poster(props) {
    const {path, alt} = props;
    const url = 'https://image.tmdb.org/t/p/w500/';
    const imageUrl = `${url}${path}`;

    return (
        <Fragment>
            <img src={imageUrl} alt={alt}/>
        </Fragment>
    )
}
