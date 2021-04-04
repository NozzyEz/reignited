const base_url = 'https://api.rawg.io/api';
const pageSize = 24; // Determines how many items we get back from the call
const auth = process.env.REACT_APP_RAWG_AUTH;

//* gets the current date, saving us from having to use Moment.js for this simple purpose
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

// URLs needed to make the API calls in Redux
export const popularGamesURL = () =>
  `${base_url}/games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=${pageSize}&key=${auth}`;
export const newGamesURL = () =>
  `${base_url}/games?dates=${lastYear},${currentDate}&ordering=-released&page_size=${pageSize}&key=${auth}`;
export const upcommingGamesURL = () =>
  `${base_url}/games?dates=${currentDate},${nextYear}&ordering=-added&page_size=${pageSize}&key=${auth}`;

export const gameDetailsURL = game_id => `${base_url}/games/${game_id}`;
export const gameScreenshotsURL = game_id => `${base_url}/games/${game_id}/screenshots?key=${auth}`;

export const searchGameURL = game_name =>
  `${base_url}/games?search=${game_name}&page_size=${pageSize}&key=${auth}`;
