import React from 'react';
import { API_URL } from '../app/page';

const getVideos = async (id) => {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    const response = await fetch(`${API_URL}/${id}/videos`);
    return response.json();
}

const MovieVideos = async ({ id }: { id: string }) => {
    const videos = await getVideos(id);
    return (
        <>
            {JSON.stringify(videos)}
        </>
    )
}

export default MovieVideos;   