import styles from './App.module.css';
import Card from "./movieCard";
import { v4 as uuid } from "uuid";
import { moviesData, imgPath } from './moviesData.js';
function App() {
   

    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <h4 className="text-center mt-5 fw-bold fs-2">MOVIES</h4>
                <div className={styles.line}></div>
            </div>
          
            <div className={styles.content}>
                {moviesData.map((element) => {
                    return (<Card key={uuid()} id={uuid()} original_language={element.original_language} overview={element.overview} poster_path={element.poster_path} release_date={element.release_date} title={element.title} img={imgPath}></Card>)
                 
                   
                })}
              
            </div>
          </div>
   
  );
}

export default App;

