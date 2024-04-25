import React from 'react';
import { API_URL } from '../app/page';

const getMovie = async (id) => {
    await new Promise((resolve) => setTimeout(resolve, 5000));
    const response = await fetch(`${API_URL}/${id}`);
    return response.json();
}

const MovieInfo = async ({ id }: { id: string }) => {
    const movie = await getMovie(id);
    return (
        <>
            {JSON.stringify(movie)}
        </>
    )
}

export default MovieInfo;   