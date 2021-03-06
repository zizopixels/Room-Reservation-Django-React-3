import React from "react";
import { Link } from "react-router-dom";
import { Heading } from "@chakra-ui/react"
export default function CarouselItems({ data }) {
  const items = data.map((d, index) => (
    <div className="carousel-item" key={index}>
      <Link to={`/single-room/${d.room_slug}`}>
        <img
          className="d-block w-100 hero-image"
          src={d.cover_image}
          alt="Fourth slide"
        />
      </Link>
      <div className="carousel-caption d-md-block">
        <Link
          to={`/single-room/${d.room_slug}`}
          className="text-decoration-none text-white"
        >
          
          <Heading> {d.title} </Heading>
           
        </Link>
        <p>$ {d.price_per_night}</p>
      </div>
    </div>
  ));
  return <>{items}</>;
}
