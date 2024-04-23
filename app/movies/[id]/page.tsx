import React from 'react';

const page = ({ params: { id } }) => {
    console.log(id)
    return (
        <>
            movies {id}
        </>
    )
}

export default page;