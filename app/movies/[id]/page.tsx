import React from 'react';

export const metadata = {
    title: "movie detail"
}

const page = ({ params: { id } }) => {
    console.log(id)
    return (
        <>
            movies {id}
        </>
    )
}

export default page;