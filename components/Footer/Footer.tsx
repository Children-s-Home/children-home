'use client'

import Link from "next/link";

export default function Footer(){
  return (
    <div className="footer-container">
      <div className="links">
        <div className="column">
          <Link className="footer-links text-decoration-none text-dark" href="/Impact">
            How to help
          </Link>

          <Link className="footer-links text-decoration-none text-dark" href="/SearchResults">
            Find a home
          </Link>

          <Link className="footer-links text-decoration-none text-dark" href="/Blog">
            Blog
          </Link>

          <Link className="footer-links text-decoration-none text-dark" href="/">
            Home
          </Link>
        </div>

        <div className="column">
          <a href="" className="text-decoration-none text-dark">Cookies Policy</a>
          <a href="" className="text-decoration-none text-dark">Privacy Notice</a>
          <a href="" className="text-decoration-none text-dark">Terms and Conditions</a>
          <a href="" className="text-decoration-none text-dark">Report</a>
        </div>
      </div>

      <div className="newsletter">
        <div className="newsletter-content">
          <h2>Sign Up for the Newsletter</h2>
          <p>
            This newsletter gives you a reminder of the events you reserved and
            the upcoming events that may interest you.
          </p>
          <div className="email-form">
            <form action="">
              <input type="text" placeholder="Enter your email" />
              <button value="submit">SUBMIT</button>
            </form>
          </div>
        </div>
        <div className="footer-icons">
          <a href="">
            <img src="/images/mdi_twitter.png" alt="" />
          </a>
          <a href="">
            <img src="/images/ri_instagram-line.png" alt="" />
          </a>
          <a href="">
            <img src="/images/ic_outline-facebook.png" alt="" />
          </a>
          <a href="">
            <img src="/images/mdi_linkedin.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};
