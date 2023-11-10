'use client'
import PropTypes from "prop-types";

import DollarSign from "../../../../public/assets/dollarSign";

export default function DonationPriceBtn({ price }:any) {
  return (
    <button className="donation-price-btn">
      <DollarSign /> {price}
    </button>
  );
}

DonationPriceBtn.propTypes = {
  price: PropTypes.number,
};

