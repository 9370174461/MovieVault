'use client'
import  { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { firestore } from '../firebase/config';

export default function Pages() {

    const [movies, setMovies] = useState([]);

    const moviesCollectionRef = collection(firestore, "movies");

    useEffect(() => {
        const getMovieList = async () => {
            try {
                const querySnapshot = await getDocs(moviesCollectionRef);
                const movieData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setMovies(movieData);
                console.log(movieData);
            } catch (error) {
                console.error(error);
            }
        }
    
        getMovieList();

    }, []);

    // Rest of your component code...



   

  return (
    <div className='container mt-5 pt-5 '>
    {movies.map(movie => (
        <div key={movie.id} className="card" style={{ width: '18rem' }}>
            <img src={movie.imageUrl} className="card-img-top" alt={movie.title} />
            <div className="card-body">
                <h5 className="card-title">{movie.title}</h5>
                <p className="card-text">{movie.overview}</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    ))}
</div>
  )
}
