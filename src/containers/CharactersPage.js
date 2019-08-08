import React, { useEffect } from "react";
import css from "./CharactersPage.module.scss";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as UserActions from "../actions/user";
import * as CharactersActions from "../actions/characters";
import CharacterCard from "../components/CharacterCard";
import LoadingSpinner from "../components/LoadingSpinner";
import { history } from "../store";

const CharactersPage = ({
  charactersStore,
  fetchCharacterList,
  pickCharacter
}) => {
  useEffect(() => {
    if (charactersStore.list.length === 0) {
      fetchCharacterList();
    }
  }, []);

  const handlePickCard = (event, character) => {
    let slot = event.target.innerText;
    pickCharacter(slot, character);
    history.push("/battle");
  };

  return (
    <div className={css.CharactersPage}>
      <div className={css.CharactersList}>
        {charactersStore.isLoading ? (
          <LoadingSpinner />
        ) : (
          charactersStore.list.map((character, index) => {
            return (
              <CharacterCard
                title={character.name}
                image={`${character.thumbnail.path}.${
                  character.thumbnail.extension
                }`}
                description={character.description}
                handlePickCard={event => handlePickCard(event, character)}
                key={index}
              />
            );
          })
        )}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  charactersStore: state.characters
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...UserActions, ...CharactersActions }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CharactersPage);
