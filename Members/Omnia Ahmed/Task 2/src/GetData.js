import React from 'react';
import moviesData from './moviesData';
import TakeData from './TakeData';
import { v4 as uuidv4 } from 'uuid';
import styles from './styles.module.css';
// deal as parent component
const GetData = () => {
    const imgPath = "https://image.tmdb.org/t/p/w500/";
    const movieDetails = [];

    const GetMovies = () => {
        return moviesData.map((movie) => {
            const posterPath = imgPath + movie.poster_path;
            const movieData = {
                id: uuidv4(),
                original_language: movie.original_language,
                title: movie.title,
                overview: movie.overview,
                posterPath: posterPath,
                releaseDate: movie.release_date
            };
            movieDetails.push(movieData)
     });
    };

    return (
        <div className={styles.main}>
            {/*<h1 className={styles.title}>Movies List From GET DATA</h1>*/}
            {GetMovies()}
            <TakeData movieDetails={movieDetails} />
        </div>
    );
};

export default GetData;