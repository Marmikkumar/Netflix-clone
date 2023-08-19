import React from "react";
import "./styles.css";

export default function About() {
  return (
    <div className="about">
      <div className="headline"></div>
      <div className="about-first">
        <div className="con-1">
          <h1>Enjoy on your TV</h1>
          <p>
            Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
            players and more.
          </p>
        </div>
        <div className="fig">
          <img
            alt=""
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
          />
        </div>
      </div>

      <div className="headline"></div>

      <div className="about-first">
        <div className="fig">
          <img
            alt=""
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
          />
        </div>
        <div className="con-1">
          <h1>Download your shows to watch offline</h1>
          <p>Save your favourites easily and always have something to watch.</p>
        </div>
      </div>

      <div className="headline"></div>

      <div className="about-first">
        <div className="con-1">
          <h1>Watch everywhere</h1>
          <p>
            Stream unlimited movies and TV shows on your phone, tablet, laptop,
            and TV.
          </p>
        </div>
        <div className="fig">
          <img
            alt=""
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png"
          />
        </div>
      </div>
      <div className="headline"></div>
      <div className="about-first">
        <div className="fig">
          <img
            alt=""
            src="https://occ-0-2086-2164.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVr8nYuAg0xDpXDv0VI9HUoH7r2aGp4TKRCsKNQrMwxzTtr-NlwOHeS8bCI2oeZddmu3nMYr3j9MjYhHyjBASb1FaOGYZNYvPBCL.png?r=54d"
          />
        </div>
        <div className="con-1">
          <h1>Create profiles for kids</h1>
          <p>
            Send children on adventures with their favourite characters in a
            space made just for them—free with your membership.
          </p>
        </div>
      </div>
      <div className="headline"></div>
    </div>
  );
}
