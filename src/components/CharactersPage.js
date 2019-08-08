import React from "react";
import css from "./CharactersPage.module.scss";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as CharactersActions from "../actions/characters";

const CharactersPage = props => {
  return (
    <div className={css.CharactersPage}>
      <h1>Characters Page</h1>
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
