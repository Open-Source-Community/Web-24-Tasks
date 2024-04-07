// Deal as child component

import styles from './styles.module.css';
import React from 'react';
const TakeData = ({ movieDetails }) => {
   
    return (
        <div className={styles.container}>
            {movieDetails.slice(0, 3).map((data) => (
                <div key={data.id} className={styles.box}>
                    {data.title ? (
                        <h3 className={styles.movie_title}>{data.title}</h3>) :
                        (<h3>Title is Required</h3>)}
                    <img className={styles.images} src={data.posterPath} alt={data.title} />
                    <p className={styles.overview}>overview :</p>
                    {data.overview ? (<p className={styles.description}>{data.overview}</p>) :
                        (<p className={styles.description}>There is not a description it is mine</p>)}
                </div>
            ))}

            {movieDetails.slice(3).map((data) => (
                <div key={data.id} className={styles.box} id={styles.secondRow}>
                    {data.title ? (
                        <h3 className={styles.movie_title}>{data.title}</h3>) :
                        (<h3>Title is Required</h3>)}
                    <img className={styles.images} src={data.posterPath} alt={data.title} />
                    <p className={styles.overview}>overview :</p>
                    {data.overview ? (<p className={styles.description}>{data.overview}</p>) :
                        (<p className={styles.description}>There is not a description it is mine</p>)}
                    
                </div>
            ))}
        </div>
    );
};



export default TakeData;