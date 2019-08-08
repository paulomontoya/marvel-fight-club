import { charactersTypes } from "../actions/characters";

const INITIAL_STATE = {
  isLoading: false,
  error: false,
  list: []
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case charactersTypes.FETCH_CHARACTER_LIST:
      return {
        ...state,
        isLoading: true
      };

    case charactersTypes.FETCH_CHARACTER_LIST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: false,
        list: action.payload
      };

    case charactersTypes.FETCH_CHARACTER_LIST_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    default:
      return state;
  }
}
