export const battlelogTypes = {
  FIGHT: "FIGHT",
  FIGHT_DONE: "FIGHT_DONE"
};

export const fight = (roundsAmount, characterA, characterB) => {
  return {
    type: battlelogTypes.FIGHT,
    payload: {
      roundsAmount,
      characterA,
      characterB
    }
  };
};
