export const userTypes = {
  PICK_CHARACTER: "PICK_CHARACTER"
};

export const pickCharacter = (character, slot) => {
  return {
    type: userTypes.PICK_CHARACTER,
    payload: {
      slot,
      character
    }
  };
};
