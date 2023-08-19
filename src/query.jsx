import React, { useState } from "react";
import "./styles.css";

export default function Query(probs) {
  const [key, setkey] = useState(false);

  function handleclick() {
    setkey(!key);
  }

  return (
    <div className="query">
      <div className="query-title">
        <p>{probs.ques}</p>
        <i
          onClick={handleclick}
          className={key ? " fa-solid fa-xmark" : "fa-solid fa-plus"}
        ></i>
      </div>
      <div className={key ? "query-res" : "hide"}>
        <p>{probs.ans}</p>
      </div>
    </div>
  );
}
