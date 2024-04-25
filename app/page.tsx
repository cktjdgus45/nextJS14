import React from 'react';
import Navigation from '../components/navigation';
import Link from 'next/link';

export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

const getMovies = async () => {
    const response = await fetch(API_URL);
    const movies = await response.json();
    return movies;
}

const page = async (props) => {
    const movies = await getMovies();
    return (
        <>
            {movies.map(movie => <li key={movie.id}>
                <Link href={`/movies/${movie.id}`}>
                    {movie.title}
                </Link>
            </li>)};
        </>
    )
}

export default page;