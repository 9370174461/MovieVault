"use client";
import './globals.css'
import React, { useEffect, useState } from "react";
import Slider from "./components/Slider";
import Topmovie from "./topmovie/page";
import { Carousel } from "react-bootstrap";


export default function page() {
  const [movielist, setMovielist] = useState([]);
  const getmovie = async () => {
    try {
      fetch(
        "https://api.themoviedb.org/3/discover/movie?api_key=79bd47a591062f4695f664d8ff6a67d7"
      )
        .then((res) => res.json())
        .then((json) => setMovielist(json.results));
    } catch (error) {
      setError("Error fetching data");
    }
  };
  useEffect(() => {
    getmovie();
  }, []);

  return (
    <>
      <div>
        <Slider movielist={movielist}/>
       
        <Topmovie  />
      </div>
    </>
  );
}
