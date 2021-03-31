import axios from 'axios';
import {popularGamesURL, upcommingGamesURL, newGamesURL} from '../api';

const auth = process.env.REACT_APP_RAWG_AUTH;

export const loadGames = () => async dispatch => {
  const popularGamesData = await axios.get(`${popularGamesURL()}&key=${auth}`);
  const newGamesData = await axios.get(`${newGamesURL()}&key=${auth}`);
  const upcomingGamesData = await axios.get(`${upcommingGamesURL()}&key=${auth}`);
  dispatch({
    type: 'FETCH_GAMES',
    payload: {
      popular: popularGamesData.data.results,
      newGames: newGamesData.data.results,
      upcoming: upcomingGamesData.data.results,
    },
  });
};
