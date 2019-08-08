import React from "react";
import css from "./CharactersPage.module.scss";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as CharactersActions from "../actions/characters";
import CharacterCard from "../components/CharacterCard";

const CharactersPage = props => {
  return (
    <div className={css.CharactersPage}>
      <h1>Characters</h1>

      <div className={css.CharactersList}>
        <CharacterCard
          title="Thanos"
          image={
            "http://i.annihil.us/u/prod/marvel/i/mg/6/40/5274137e3e2cd.jpg"
          }
          description={
            "The Mad Titan Thanos, a melancholy, brooding individual, consumed with the concept of death, sought out personal power and increased strength, endowing himself with cybernetic implants until he became more powerful than any of his brethren."
          }
        />
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
