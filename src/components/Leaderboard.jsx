import React from "react";
import css from "./Leaderboard.module.scss";
import lodash from "lodash";

const Leaderboard = ({ list }) => {
  let rankedList = lodash
    .chain(list)
    .groupBy("winner.character.id")
    .map(value => {
      return {
        character: value[0].winner.character,
        wins: value.length
      };
    })
    .orderBy("wins", "desc")
    .slice(0, 5)
    .value();

  return (
    <section className={css.Leaderboard}>
      {rankedList.length > 0 && (
        <>
          <h1>Leaderboard</h1>
          {rankedList.map((rankItem, index) => {
            return (
              <article key={index}>
                <span>{rankItem.wins} wins</span>
                <img
                  src={`${rankItem.character.thumbnail.path}.${
                    rankItem.character.thumbnail.extension
                  }`}
                />
                <h1>{rankItem.character.name}</h1>
              </article>
            );
          })}
        </>
      )}
    </section>
  );
};

export default Leaderboard;
