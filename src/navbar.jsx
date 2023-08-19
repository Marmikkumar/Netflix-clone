import React from "react";
import "./styles.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="menu">
        <img
          src="data:image/webp;base64,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"
          alt="logo"
        />
        <div className="menubar">
          <div className="box">
            <i class="fa-solid fa-globe"></i>
            <select name="lang" id="">
              <option value="English">English</option>
              <option value="Hindi">हिंदी</option>
            </select>
          </div>
          <button className="btn" type="submit">
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
}
