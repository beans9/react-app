import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

function Detail() {
    const {id} = useParams()
    const [movie, setMovie] = useState({});

    async function getDetail() {
        const response = await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`);
        const json = await response.json();
        setMovie(json.data.movie);
    }

    useEffect(() => {
        getDetail()
    }, []);

    return (
        <div><h1>detail</h1>
        <h2>{movie.title}</h2>
        </div>
    );
}
export default Detail;