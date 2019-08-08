import React, { useEffect } from "react";
import css from "./BattlePage.module.scss";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as UserActions from "../actions/user";
import * as CharactersActions from "../actions/characters";
import CharacterCard from "../components/CharacterCard";
import LoadingSpinner from "../components/LoadingSpinner";

const BattlePage = ({
  userStore,
  charactersStore,
  pickCharacter,
  fetchCharacterList
}) => {
  useEffect(() => {
    if (charactersStore.list.length === 0) {
      fetchCharacterList();
    }
  }, []);

  let charactersPicked = userStore.charactersPicked;

  let isSelected = Boolean(
    charactersPicked["A"].character !== null &&
      charactersPicked["B"].character !== null
  );

  let list = charactersStore.list;

  if (!isSelected && list.length >= 2) {
    pickCharacter("A", list[Math.floor(Math.random() * list.length)]);
    pickCharacter("B", list[Math.floor(Math.random() * list.length)]);
  }

  const onSubmitBattle = event => {
    event.preventDefault();
    console.log("rounds", event.target.rounds.value);
  };

  return (
    <div className={css.BattlePage}>
      {!isSelected ? (
        <LoadingSpinner />
      ) : (
        <>
          <div className={css.BattleWrapper}>
            {Object.keys(charactersPicked).map(key => {
              return (
                <CharacterCard
                  title={charactersPicked[key].character.name}
                  image={`${charactersPicked[key].character.thumbnail.path}.${
                    charactersPicked[key].character.thumbnail.extension
                  }`}
                  description={charactersPicked[key].character.description}
                  key={key}
                />
              );
            })}
          </div>
          <form className={css.FightForm} onSubmit={onSubmitBattle}>
            <label htmlFor="rounds">How many rounds for this battle?</label>
            <input
              name="rounds"
              id="rounds"
              type="number"
              min={1}
              max={10}
              defaultValue={1}
              required
            />
            <button type="submit">Fight!</button>
          </form>
        </>
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  userStore: state.user,
  charactersStore: state.characters
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...UserActions, ...CharactersActions }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BattlePage);
