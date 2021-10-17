import React from "react";
import { Jumbotron } from "react-bootstrap";
import { FaSass, FaReact, FaNodeJs, FaBootstrap } from "react-icons/fa";
import "../homepage/homepage.styles.scss";

const Homepage = () => {
  return (
    <div className="content">
      <div className="icons">
        <span className="icon">
          <FaReact size="4em" color="white"></FaReact>
        </span>
        <span className="icon">
          <FaSass size="4em" color="white"></FaSass>
        </span>
        <span className="icon">
          <FaNodeJs size="4em" color="white"></FaNodeJs>
        </span>
        <span className="icon">
          <FaBootstrap size="4em" color="white"></FaBootstrap>
        </span>
      </div>
      {/* <FaFacebookF></FaFacebookF>
          <FaFacebookF></FaFacebookF> */}
      <div className="homepage">
        <h2 style={{
          color: "#fff"
        }}>Hi There!</h2>
        <h5 className="content">
          I'm currently a Sophomore at NIT Jamshedpur with varied interests in
          different technologies. I spent most of my free time reading books and
          I also enjoy problem solving. The rest of my time is mostly spent on
          sleeping and being a wasteman. This is a very basic and my first
          attempt of building a react website from scratch.
        </h5>
      </div>
    </div>
  );
};

export default Homepage;
