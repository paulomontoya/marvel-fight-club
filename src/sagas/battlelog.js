import { put } from "redux-saga/effects";
import { battlelogTypes } from "../actions/battlelog";

export function* battlelogSaga({ payload }) {
  for (let i = 1; i <= payload.roundsAmount; i++) {
    const win_losKey =
      Math.floor(Math.random() * 1) === 1 ? ["A", "B"] : ["B", "A"];

    yield put({
      type: battlelogTypes.FIGHT_DONE,
      payload: {
        winner: payload[`character${win_losKey[0]}`],
        loser: payload[`character${win_losKey[1]}`],
        timestamp: new Date()
      }
    });
  }
}
