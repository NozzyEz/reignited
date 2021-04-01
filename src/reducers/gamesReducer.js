const initialState = {
  popularGames: [],
  newGames: [],
  upcomingGames: [],
  searched: [],
};

const gamesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_GAMES':
      return {
        ...state,
        popularGames: action.payload.popular,
        newGames: action.payload.newGames,
        upcomingGames: action.payload.upcoming,
      };

    default:
      return {...state};
  }
};

export default gamesReducer;
