import React from "react";
import "./styles.css";

export default function Footer() {
  return (
    <div className="footer">
      <p>Questions? Call 000-800-919-1694</p>
      <ul className="footer-item">
        <li>FAQ</li>
        <li>Help Centre</li>
        <li>Account</li>
        <li>Media Centre</li>
        <li>Investor Relations</li>
        <li>Jobs</li>
        <li>Terms of Use</li>
        <li>Ways to Watch</li>
        <li>Privacy</li>
        <li>Cookie Preferences</li>
        <li>Corporate Information</li>
        <li>Contact Us</li>
        <li>Speed Test</li>
        <li>Legal Notices</li>
        <li>Only on Netflix</li>
      </ul>

      <div className="box pad">
        <i class="fa-solid fa-globe"></i>
        <select name="lang" id="">
          <option value="English">English</option>
          <option value="Hindi">हिंदी</option>
        </select>
      </div>
      <p>Netflix India</p>
    </div>
  );
}
