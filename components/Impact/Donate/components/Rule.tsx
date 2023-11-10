'use client'
import PropTypes from "prop-types";

export default function Rule({ className }:any) {
  return <div className={className}></div>;
}
Rule.propTypes = {
  className: PropTypes.string,
};
