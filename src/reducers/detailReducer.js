const initialState = {game: {}, screenshots: {}, isLoading: true};

const detailReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_GAME_DETAILS':
      return {
        ...state,
        game: action.payload.gameDetails,
        screenshots: action.payload.screenshots,
        isLoading: false,
      };
    case 'LOADING_DETAILS':
      return {
        ...state,
        isLoading: true,
      };

    default:
      return {...state};
  }
};

export default detailReducer;
