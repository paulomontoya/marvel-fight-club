import React, { useEffect } from "react";
import css from "./CharactersPage.module.scss";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as CharactersActions from "../actions/characters";
import CharacterCard from "../components/CharacterCard";
import LoadingSpinner from "../components/LoadingSpinner";

const CharactersPage = ({ charactersStore, fetchCharacterList }) => {
  useEffect(() => {
    fetchCharacterList();
  }, []);

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
  bindActionCreators(CharactersActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CharactersPage);
