'use client'
import PropTypes from "prop-types";


export default function DonationRadioContainer({ value, name, label }:any) {
  
  return (
    <div className="radio-container">
      <input
        type="radio"
        id={value}
        value={value}
        name={name}
      />
      <label htmlFor={value} className="radio-lbl">
        {label}
      </label>
    </div>
  );
}

DonationRadioContainer.propTypes = {
  value: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
};

