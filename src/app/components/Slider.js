"use client";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from 'react-bootstrap/Carousel';
export default function Slider({ movielist }) {
  return (
   <div> 
     <Carousel data-bs-theme="dark">
     {movielist.map((movie) => (
        
      <Carousel.Item key={movie.id}>
      <img
          className="d-block w-100 col-sm-12 col-12 img-fluid img-thumbnail"
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt="First slide"
          style={{height:"80vh",width:"100% ",objectFit:"cover",display:"block"}}
        />   
     
      </Carousel.Item>   ))}
      </Carousel>
   </div>
  );
}
