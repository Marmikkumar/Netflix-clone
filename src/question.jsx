import React from "react";
import "./styles.css";
import Query from "./query";
import detail from "./detail";

export default function Question() {
  return (
    <div className="Question">
      <h1 className="title">Frequently Asked Questions</h1>
      <div className="arrange">
        {detail.map((item) => (
          <Query key={item.key} id={item.key} ques={item.ques} ans={item.ans} />
        ))}
      </div>

      <div className="last-form below">
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <div className="home-form">
          <input type="email" placeholder="Email address" className="email" />
          <button type="button" className="form-btn">
            GET STARTED <i class="fa-solid fa-angle-right"></i>
          </button>
        </div>
      </div>
      <div className="headline"></div>
    </div>
  );
}
