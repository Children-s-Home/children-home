'use client'

import PropTypes from "prop-types"


export default function IndividualSlide(props) {
  return (
    <div
      className="gallery-slide"
      style={{ backgroundImage: `url("/images/${props.img}.jpeg")` }}
    ></div>
  );
}

IndividualSlide.propTypes = {
    img: PropTypes.string,
}
