import {useEffect} from 'react';

import styled from 'styled-components';
import {motion} from 'framer-motion';

// Redux
import {useDispatch, useSelector} from 'react-redux';
import {loadGames} from '../actions/gamesAction';

// Components
import GameCard from '../components/GameCard';

function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);

  const {popularGames, newGames, upcomingGames} = useSelector(store => store.games);
  return (
    <GameList>
      <h2>Upcoming Games</h2>
      <Games>
        {upcomingGames.map(game => (
          <GameCard game={game} key={game.id} />
        ))}
      </Games>
      <h2>New Games</h2>
      <Games>
        {newGames.map(game => (
          <GameCard game={game} key={game.id} />
        ))}
      </Games>
      <h2>Popular Games</h2>
      <Games>
        {popularGames.map(game => (
          <GameCard game={game} key={game.id} />
        ))}
      </Games>
    </GameList>
  );
}

const GameList = styled(motion.div)`
  padding: 0rem 5rem;
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
