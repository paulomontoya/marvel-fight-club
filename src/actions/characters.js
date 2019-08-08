export const charactersTypes = {
  FETCH_CHARACTER_LIST: "FETCH_CHARACTER_LIST",
  FETCH_CHARACTER_LIST_SUCCESS: "FETCH_CHARACTER_LIST_SUCCESS",
  FETCH_CHARACTER_LIST_ERROR: "FETCH_CHARACTER_LIST_ERROR"
};

export const fetchCharacterList = () => {
  return {
    type: charactersTypes.FETCH_CHARACTER_LIST
  };
};
