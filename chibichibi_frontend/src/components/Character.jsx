import React from 'react';

function Character({
    name,
    franchise,
    artist,
    source_url,
    image_url
}) {
    return (
        <div>
            <h3>{name}</h3>
            <h4>{franchise}</h4>
            <img style={{'maxWidth': 300}} src={image_url} alt={name}></img>
            <p>Artist: {artist}</p>
            <br />
            <p>Sourced from {source_url}</p>
        </div>
    );
}

export default Character;