import { battlelogTypes } from "../actions/battlelog";

const INITIAL_STATE = {
  list: [
    // {
    // winner: "",
    // loser: "",
    // timestamp: ""
    // }
  ]
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case battlelogTypes.FIGHT:
      return {
        ...state
      };

    case battlelogTypes.FIGHT_DONE:
      return {
        ...state,
        list: [
          {
            winner: action.payload.winner,
            loser: action.payload.loser,
            timestamp: action.payload.timestamp
          },
          ...state.list
        ]
      };

    default:
      return state;
  }
}
