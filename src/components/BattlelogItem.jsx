import React from "react";
import moment from "moment";
import Emoji from "../components/Emoji";
import css from "./BattlelogItem.module.scss";

const BattleItem = ({ battle }) => {
  return (
    <div className={css.BattlelogItem}>
      <div className={css.BattlelogItemWinner}>
        <img
          src={`${battle.winner.character.thumbnail.path}.${
            battle.winner.character.thumbnail.extension
          }`}
        />
        <Emoji code="1f601" />
        <span>{battle.winner.character.name}</span>
      </div>
      <div className={css.BattlelogItemTimestamp}>
        {moment(battle.timestamp).fromNow()}
      </div>
      <div className={css.BattlelogItemLoser}>
        <img
          src={`${battle.loser.character.thumbnail.path}.${
            battle.loser.character.thumbnail.extension
          }`}
        />
        <Emoji code="1f62d" />
        <span>{battle.loser.character.name}</span>
      </div>
    </div>
  );
};

export default BattleItem;
