import React, { useState } from 'react'
import Rating from "./Rating"
import { getImgUrl } from '../../utils/cine-utility'
import MovieDetailsModal from './MovieDetailsModal';

export default function MovieCard({ movie }) {
  const [isModal, setIsModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  // const [cart, setToCart] = useState([]);

  function handleCloseModal() {
    setSelectedMovie(null);
    setIsModal(false);
  }
  function handleShowModal() {
    setSelectedMovie(movie);
    setIsModal(true);
  }

  // function handleCart() {
  //   const newCart = [...cart];
  //   setToCart([
  //     ...newCart,
  //     selectedMovie
  //   ])
  //   console.log(newCart);
  // }


  return (
    <>
      <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
        <a href='#' onClick={handleShowModal}>
          <img className="w-full object-cover" src={getImgUrl(movie.cover)} alt={movie.title} />
          <figcaption className="pt-4">
            <h3 className="text-xl mb-1">{movie.title}</h3>
            <p className="text-[#575A6E] text-sm mb-2">{movie.genre}</p>
            <div className="flex items-center space-x-1 mb-5">
              <Rating value={movie.rating} />
            </div>

            <a className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
              // onClick={handleCart}
              href="#">
              <img src="./assets/tag.svg" alt="" />
              <span >${movie.price} | Add to Cart</span>
            </a>
          </figcaption>
        </a>
      </figure >
      {isModal && <MovieDetailsModal movie={selectedMovie} onCancel={handleCloseModal} />
      }
    </>
  )
}
