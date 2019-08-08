import { takeLatest } from "redux-saga/effects";
import { charactersTypes } from "../actions/characters";
import { charactersListSaga } from "./characters";

export default function* root() {
  yield takeLatest(charactersTypes.FETCH_CHARACTER_LIST, charactersListSaga);
}
