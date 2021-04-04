import axios from 'axios';
import {popularGamesURL, upcommingGamesURL, newGamesURL, searchGameURL} from '../api';

export const loadGames = () => async dispatch => {
  const popularGamesData = await axios.get(popularGamesURL());
  const newGamesData = await axios.get(newGamesURL());
  const upcomingGamesData = await axios.get(upcommingGamesURL());
  dispatch({
    type: 'FETCH_GAMES',
    payload: {
      popular: popularGamesData.data.results,
      newGames: newGamesData.data.results,
      upcoming: upcomingGamesData.data.results,
    },
  });
};

export const loadSearch = game_name => async dispatch => {
  const searchData = await axios.get(searchGameURL(game_name));
  dispatch({
    type: 'FETCH_SEARCH',
    payload: {
      searched: searchData.data.results,
    },
  });
};
