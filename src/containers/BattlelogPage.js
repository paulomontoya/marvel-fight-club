import React, { useEffect } from "react";
import css from "./BattlelogPage.module.scss";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as CharactersActions from "../actions/characters";
import LoadingSpinner from "../components/LoadingSpinner";
import BattlelogItem from "../components/BattlelogItem";

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
        battlelogStore.list.length > 0 &&
        battlelogStore.list.map((battle, index) => {
          return <BattlelogItem battle={battle} key={index} />;
        })
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
