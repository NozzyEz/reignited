import {useEffect} from 'react';
import {useLocation} from 'react-router-dom';

import styled from 'styled-components';
import {motion, AnimatePresence, AnimateSharedLayout} from 'framer-motion';

// Redux
import {useDispatch, useSelector} from 'react-redux';
import {loadGames} from '../actions/gamesAction';

// Components
import GameCard from '../components/GameCard';
import GameDetail from '../components/GameDetail';

function Home() {
  // Use location read from the url we're on, which lets the app know whether to render the GameDetail
  // Component by etracting the ID from the url if there is one.
  const location = useLocation();
  const path = location.pathname.split('/')[2];
  // console.log('from Home:');
  // console.log(parseInt(path));

  // Dispatching an action to Redux to download the data from the API
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);

  // Fetching the data from Redux
  const {popularGames, newGames, upcomingGames, searched} = useSelector(store => store.games);

  return (
    <GameList>
      <AnimateSharedLayout type="crossfade">
        <AnimatePresence>{path && <GameDetail id={parseInt(path)} />}</AnimatePresence>
        <h2>Search results</h2>
        <Games>
          {searched.map(game =>
            game.background_image ? <GameCard game={game} key={game.id} /> : ''
          )}
        </Games>
        <h2>Upcoming Games</h2>
        <Games>
          {upcomingGames.map(game =>
            game.background_image ? <GameCard game={game} key={game.id} /> : ''
          )}
        </Games>
        <h2>New Games</h2>
        <Games>
          {newGames.map(game =>
            game.background_image ? <GameCard game={game} key={game.id} /> : ''
          )}
        </Games>
        <h2>Popular Games</h2>
        <Games>
          {popularGames.map(game =>
            game.background_image ? <GameCard game={game} key={game.id} /> : ''
          )}
        </Games>
      </AnimateSharedLayout>
    </GameList>
  );
}

const GameList = styled(motion.div)`
  margin: 0rem 5rem;
  margin-bottom: 3rem;
  h2 {
    padding: 5rem 0rem;
    color: ${props => props.theme.primary};
  }
`;

const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(375px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
`;

export default Home;
