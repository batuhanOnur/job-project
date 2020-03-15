import React from 'react';
import { useParams } from 'react-router-dom'

function Detail() {

    let { id } = useParams();

    console.log(id);

    return (
        <div>
            <h1>naber: {id}</h1>
        </div>
    )
}

export default Detail;