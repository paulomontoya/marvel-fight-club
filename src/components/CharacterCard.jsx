import React, { useState } from "react";
import css from "./CharacterCard.module.scss";
import PropTypes from "prop-types";
import { useSpring, animated } from "react-spring";
import useMeasure from "../utils/useMeasure";

const CharacterCard = ({ title, image, description }) => {
  const [open, toggle] = useState(false);
  const [bind, { height }] = useMeasure();

  const { size, scale } = useSpring({
    size: open ? height - 80 : 35,
    scale: open ? 1.04 : 1
  });

  return (
    <animated.article
      {...bind}
      className={css.CharacterCard}
      onMouseMove={() => toggle(true)}
      onMouseLeave={() => toggle(false)}
      style={{
        backgroundImage: `url(${image})`,
        transform: scale.interpolate(s => `scale(${s})`)
      }}
    >
      <h1>{title}</h1>

      <animated.p style={{ maxHeight: size }}>{description}</animated.p>
    </animated.article>
  );
};

CharacterCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
  description: PropTypes.string
};

export default CharacterCard;
