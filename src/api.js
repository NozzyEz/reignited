// const auth = process.env.REACT_APP_RAWG_AUTH;
const base_url = 'https://api.rawg.io/api';
const pageSize = 10;
const auth = process.env.REACT_APP_RAWG_AUTH;

const getCurrentYear = () => {
  const year = new Date().getFullYear();
  return year;
};
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  return month < 10 ? `0${month}` : month;
};
const getCurrentDay = () => {
  const day = new Date().getDate();
  return day < 10 ? `0${day}` : day;
};

const currentDate = `${getCurrentYear()}-${getCurrentMonth()}-${getCurrentDay()}`;
const lastYear = `${getCurrentYear() - 1}-${getCurrentMonth()}-${getCurrentDay()}`;
const nextYear = `${getCurrentYear() + 1}-${getCurrentMonth()}-${getCurrentDay()}`;

export const popularGamesURL = () =>
  `${base_url}/games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=${pageSize}&key=${auth}`;
export const newGamesURL = () =>
  `${base_url}/games?dates=${lastYear},${currentDate}&ordering=-released&page_size=${pageSize}&key=${auth}`;
export const upcommingGamesURL = () =>
  `${base_url}/games?dates=${currentDate},${nextYear}&ordering=-added&page_size=${pageSize}&key=${auth}`;

export const gameDetailsURL = game_id => `${base_url}/games/${game_id}`;
export const gameScreenshotsURL = game_id => `${base_url}/games/${game_id}/screenshots?key=${auth}`;
