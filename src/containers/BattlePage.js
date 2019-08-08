import React, { useEffect } from "react";
import css from "./BattlePage.module.scss";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as UserActions from "../actions/user";
import * as CharactersActions from "../actions/characters";
import * as BattlelogActions from "../actions/battlelog";
import CharacterCard from "../components/CharacterCard";
import LoadingSpinner from "../components/LoadingSpinner";
import lodash from "lodash";

const BattlePage = ({
  userStore,
  charactersStore,
  pickCharacter,
  fetchCharacterList,
  fight
}) => {
  useEffect(() => {
    if (charactersStore.list.length === 0) {
      fetchCharacterList();
    }
  }, []);

  let charactersPicked = userStore.charactersPicked;

  let isASelected = Boolean(lodash.get(charactersPicked, "A.character", null));
  let isBSelected = Boolean(lodash.get(charactersPicked, "B.character", null));

  let list = charactersStore.list;

  if (list.length >= 2 && !isASelected) {
    pickCharacter("A", list[Math.floor(Math.random() * list.length)]);
  }
  if (list.length >= 2 && !isBSelected) {
    pickCharacter("B", list[Math.floor(Math.random() * list.length)]);
  }

  const onSubmitBattle = event => {
    event.preventDefault();
    fight(
      event.target.rounds.value,
      charactersPicked["A"],
      charactersPicked["B"]
    );
  };

  return (
    <div className={css.BattlePage}>
      {Boolean(!isASelected || !isBSelected) ? (
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
  charactersStore: state.characters,
  battlelogStore: state.battlelog
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    { ...UserActions, ...CharactersActions, ...BattlelogActions },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BattlePage);
