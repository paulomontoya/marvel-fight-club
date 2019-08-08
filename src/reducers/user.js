import { userTypes } from "../actions/user";

const INITIAL_STATE = {
  charactersPicked: {
    A: {
      character: null
    },
    B: {
      character: null
    }
  }
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case userTypes.PICK_CHARACTER:
      return {
        ...state,
        charactersPicked: {
          ...state.charactersPicked,
          [action.payload.slot]: {
            character: action.payload.character
          }
        }
      };
    default:
      return state;
  }
}
