import React from 'react';
import { BsFillStarFill, BsStarHalf, BsStar } from "react-icons/bs";

const StarRating = ({rating}) => {

  const convertNumberToStars = (rating) =>  {
    let output = []
    const maxStars = 5

    // calculation for start
    // for example rating is 4.5
    // truncate 4.5 to 4
    let fullStars = Math.trunc(rating)
    // Math.round(0.5) = 1
    let halfStar = Math.round(rating - fullStars)
    // 5 - Math.ceil(4.5) = 5 - 4 = 1
    let emptyStar = maxStars - Math.ceil(rating)

    while ( fullStars >= 1) {
      output.push(<BsFillStarFill />)
      fullStars --
    }
    while ( halfStar >= 1) {
      output.push(<BsStarHalf />)
      halfStar --
    }

    while ( emptyStar >= 1) {
      output.push(<BsStar />)
      emptyStar --
    }

    return output;
  }

  return (
    <div className="star-rating">
      { convertNumberToStars(rating).map(star => star) }
    </div>
  );
};

export default StarRating;
