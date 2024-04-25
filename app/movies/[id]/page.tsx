import React from 'react';
import { API_URL } from '../../page';

export const metadata = {
    title: "movie detail"
}

const getMovie = async (id) => {
    const response = await fetch(`${API_URL}/${id}`);
    return response.json();
}

const getVideos = async (id) => {
    const response = await fetch(`${API_URL}/${id}/video`);
    return response.json();
}

const page = async ({ params: { id } }: { params: { id: string }; }) => {
    console.log(id)
    const [movie, videos] = await Promise.all([getMovie(id), getVideos(id)]);
    return (
        <>
            {movie.title}
        </>
    )
}

export default page;