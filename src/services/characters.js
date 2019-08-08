// import axios from "axios";
import charactersMock from "../mock/characters.json";

export const fetchCharactersService = ({ payload }) => {
  //   return axios.get(
  //     "https://gateway.marvel.com:443/v1/public/characters?apikey=3e05d056662de32691e6dbed3eabf43b"
  //   );
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(charactersMock), 2000);
  });
};
