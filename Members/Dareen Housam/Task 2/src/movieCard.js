import React, { useState } from 'react';
import styles from './movieCard.module.css';
import PropTypes from "prop-types";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';
function Card({ original_language, overview, poster_path, release_date, title, img, id }) {
    const [Overview, setOverview] = useState(false)
    const [Icons, setIcons] = useState(true)
    const [Title, setTitle] = useState(true)
    const [btn, setbtn] = useState(true)
    function view() {
        setOverview(!Overview);
        setIcons(!Icons);
        setTitle(!Title);
        setbtn(!btn);
    };
    function back() {
        setOverview(!Overview);
        setIcons(!Icons);
        setTitle(!Title);
        setbtn(!btn);
    };
    return (
        <>
            {
                    <div key={id} className={styles.item}>
                        <div className={styles.cardinfo}>
                            <div className={styles.cardtop}>
                                <img src={img +poster_path} className="card-img-top" alt="Movie" draggable="false"></img>
                            </div>
                            <div className={styles.cardContent}>
                                {
                                    Title && <h5 className="fw-bold fs-4 mt-3">{title != null ?title : "Movie"}</h5>
                                }
                                <div className={styles.icons} >
                                    {
                                        Icons &&
                                        <div>
                                            <i><FontAwesomeIcon icon={faStar} /></i>
                                            <i><FontAwesomeIcon icon={faStar} /></i>
                                            <i><FontAwesomeIcon icon={faStar} /></i>
                                            <i><FontAwesomeIcon icon={faStar} /></i>
                                            <i><FontAwesomeIcon icon={faStarHalfStroke} /></i>
                                        </div>
                                    }
                                   
                                </div>
                              
                                    
                            {Overview && <div >
                                <div className="overflow-auto">
                                    <p className={styles.over}>Overview:</p>
                                    <button className={styles.back} onClick={back }>X</button>
                                </div>
                                <p className={styles.description} >{overview != null ? overview : "Good movie"}</p>
                                </div>
                                    }

                            {
                                btn &&
                                <button className={styles.showdata} onClick={view} >Overview</button>
                            }
                             
                                </div>
                            </div>
                        </div>
                    

                
           }
        </>
    );
}

Card.propTypes = {
        original_language: PropTypes.string,
        overview: PropTypes.string,
        poster_path: PropTypes.string,
        release_date: PropTypes.string,
        title: PropTypes.string.isRequired,
  
   
};
export default Card;