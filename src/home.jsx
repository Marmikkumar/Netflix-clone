import React from "react";
import "./styles.css";
import Navbar from "./navbar";

export default function Home() {
  return (
    <div className="main">
      <div className="home">
        <Navbar />
        <div className="home-page">
          <div className="content">
            <h1>Unlimited movies, TV shows and more</h1>
            <p>Watch anywhere. Cancel anytime.</p>
            <p>
              Ready to watch? Enter your email to create or restart your
              membership.
            </p>
          </div>
          <div className="home-form">
            <input type="email" placeholder="Email address" className="email" />
            <button type="button" className="form-btn">
              GET STARTED
              <i class="fa-solid fa-angle-right"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
