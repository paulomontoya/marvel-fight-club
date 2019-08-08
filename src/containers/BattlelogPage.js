import React, { useEffect } from "react";
import css from "./BattlelogPage.module.scss";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as CharactersActions from "../actions/characters";
import LoadingSpinner from "../components/LoadingSpinner";
import moment from "moment";
import Emoji from "../components/Emoji";

const BattlelogPage = ({
  charactersStore,
  battlelogStore,
  fetchCharacterList
}) => {
  useEffect(() => {
    if (charactersStore.list.length === 0) {
      fetchCharacterList();
    }
  }, []);

  return (
    <div className={css.BattlelogPage}>
      {charactersStore.list.length === 0 ? (
        <LoadingSpinner />
      ) : (
        <>
          {battlelogStore.list.map((battle, index) => {
            return (
              <div key={index} className={css.BattlelogItem}>
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
          })}
        </>
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  charactersStore: state.characters,
  battlelogStore: state.battlelog
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...CharactersActions }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BattlelogPage);
