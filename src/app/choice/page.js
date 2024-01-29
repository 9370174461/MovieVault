
import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { firestore } from '../firebase/config';
import { BiSolidStar } from 'react-icons/bi';

// Dynamic import of Choice component
const Choice = dynamic(() => import('@s-r0/choice-js'), { ssr: false });

export default function Pages() {
  const [movies, setMovies] = useState([]);
  const [selectedRatingRange, setSelectedRatingRange] = useState(null);

  const moviesCollectionRef = collection(firestore, 'movies');

  useEffect(() => {
    const getData = async () => {
      if (selectedRatingRange) {
        try {
          const [min, max] = selectedRatingRange.split('-').map(Number);
          const q = query(moviesCollectionRef, where('rating', '>=', min), where('rating', '<=', max));
          const querySnapshot = await getDocs(q);
          const movieData = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setMovies(movieData);
        } catch (error) {
          console.error(error);
        }
      } else {
        // If no rating range selected, fetch all movies
        fetchMovies(moviesCollectionRef, setMovies);
      }
    };

    getData();
  }, [selectedRatingRange, moviesCollectionRef]);

  const handleRatingRangeChange = (selectedChoice) => {
    setSelectedRatingRange(selectedChoice.value);
  };

  return (
    <div className="container">
      <h2 className="text-center p-3"> Movies</h2>
      
      {/* Choice component for selecting the rating range */}
      <Choice
        name="ratingRange"
        label="Select Rating Range"
        choices={[
          { label: '1-4', value: '1-4' },
          { label: '4-6', value: '4-6' },
          { label: '6-8', value: '6-8' },
          { label: '8-10', value: '8-10' },
        ]}
        selectedChoice={selectedRatingRange}
        onChange={handleRatingRangeChange}
      />
      {movies.map((movie) => (
        <div key={movie.id} className="my-3 p-3">
        <Link href={`admin/${movie.id}`}>
          <div>
            <div
              className="card bs-tertiary-color-rgb"
              style={{
                maxWidth: '100%',
                backgroundColor: 'rgb(63, 61, 61)',
                color: 'white',
              }}
            >
              <div className="row g-0">
                <div className="col-md-4">
                  <div
                    style={{
                      height: '100%',
                      width: '100%',
                      overflow: 'hidden',
                      objectFit: 'cover',
                    }}
                  >
                    <img
                      src={movie.fileURL}
                      style={{
                        height: '60vh',
                        width: '100%',
                        objectFit: 'cover',
                      }}
                      className=" rounded float-left"
                      alt="..."
                    />
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title d-flex align-items-center gap-3">
                      {movie.title} <BiSolidStar size={25} color="white" />
                      {movie.rating}
                    </h5>
                    <h5>Overview:</h5>
                    <p className="card-text">{movie.overview}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
      ))}
    </div>
  );
}
