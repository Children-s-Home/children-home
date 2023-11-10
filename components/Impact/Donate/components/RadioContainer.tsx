'use client'
import PropTypes from "prop-types";


export default function RadioContainer({ children, className }:any) {
  return <div className={className}>{children}</div>;
}

RadioContainer.propTypes = {
  className: PropTypes.string,
};

