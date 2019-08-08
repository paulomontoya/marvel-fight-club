import React, { useState } from "react";
import css from "./CharacterCard.module.scss";
import PropTypes from "prop-types";
import { useSpring, animated } from "react-spring";

const CharacterCard = ({ title, image, description, handlePickCard }) => {
  const [open, toggle] = useState(false);

  const { size, scale } = useSpring({
    size: open ? 220 : 35,
    scale: open ? 1.04 : 1
  });

  return (
    <animated.article
      className={css.CharacterCard}
      onMouseMove={() => toggle(true)}
      onMouseLeave={() => toggle(false)}
      onTouchStart={() => toggle(true)}
      onTouchEnd={() => toggle(false)}
      style={{
        backgroundImage: `url(${image})`,
        transform: scale.interpolate(s => `scale(${s})`)
      }}
    >
      <header>
        {handlePickCard && (
          <button
            className={css.PickCard}
            onClick={handlePickCard}
            title={"Move card to slot A"}
          >
            A
          </button>
        )}
        <h1>{title}</h1>
        {handlePickCard && (
          <button
            className={css.PickCard}
            onClick={handlePickCard}
            title={"Move card to slot B"}
          >
            B
          </button>
        )}
      </header>

      <animated.p style={{ maxHeight: size }}>{description}</animated.p>
    </animated.article>
  );
};

CharacterCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
  description: PropTypes.string,
  handlePickCard: PropTypes.any
};

export default CharacterCard;
