import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState();
    const { id } = useParams();
    // console.log(id);
    const getMovie = async () => {
        const json = await (
            await fetch(
                `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
            )
        ).json();
        // console.log(json);
        setMovie(json.data.movie);
        setLoading(false);
    };
    useEffect(() => {
        getMovie();
    }, []);

    return (
        <div>
            {loading ? (
                <h1>Loading...</h1>
            ) : (
                <div>
                    <h1>{movie.title}</h1>
                    <img src={movie.medium_cover_image} alt={movie.title} />
                    <p>Update Date: {movie.date_uploaded}</p>
                    <ul>
                        {movie.genres.map((g) => (
                            <li key={g}>{g}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );

    /* return <h1>Detail</h1> */
}

export default Detail;
