import React, { Component } from "react";
import { motion } from "framer-motion";

import "./ball.css";

const bounceBall = {
  y: {
    duration: 0.8,
    yoyo: Infinity,
    ease: "easeOut",
  },
};

class BallComponent extends Component {
  render() {
    return (
      <motion.div
        className="ball"
        transition={bounceBall}
        animate={{
          y: ["100%", "-100%"],
        }}
      />
    );
  }
}

export default BallComponent;
