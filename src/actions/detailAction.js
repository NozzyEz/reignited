import axios from 'axios';
import {gameDetailsURL, gameScreenshotsURL} from '../api';

export const loadGameDetails = id => async dispatch => {
  dispatch({
    type: 'LOADING_DETAILS',
  });
  const gameData = await axios.get(`${gameDetailsURL(id)}`);
  const screenshotData = await axios.get(`${gameScreenshotsURL(id)}`);
  dispatch({
    type: 'FETCH_GAME_DETAILS',
    payload: {
      gameDetails: gameData.data,
      screenshots: screenshotData.data.results,
    },
  });
};
