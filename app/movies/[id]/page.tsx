import React, { Suspense } from 'react';
import { API_URL } from '../../page';
import MovieInfo from '../../../components/movie-info';
import MovieVideos from '../../../components/movie-videos';

export const metadata = {
    title: "movie detail"
}


const page = async ({ params: { id } }: { params: { id: string }; }) => {
    return (
        <div>
            <Suspense fallback={<h3>Loading movie info</h3>}>
                <MovieInfo id={id} />
            </Suspense>
            <Suspense fallback={<h3>Loading movie videos</h3>}>
                <MovieVideos id={id} />
            </Suspense>
        </div>
    )
}

export default page;