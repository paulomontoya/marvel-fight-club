import { put, call } from "redux-saga/effects";
import { charactersTypes } from "../actions/characters";
import { fetchCharactersService } from "../services/characters";

export function* charactersListSaga(payload) {
  try {
    const response = yield call(fetchCharactersService, payload);

    yield put({
      type: charactersTypes.FETCH_CHARACTER_LIST_SUCCESS,
      payload: response.data.results
    });
  } catch (err) {
    yield put({ type: charactersTypes.FETCH_CHARACTER_LIST_ERROR });
  }
}
