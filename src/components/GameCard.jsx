import {Link} from 'react-router-dom';

import styled from 'styled-components';
import {motion} from 'framer-motion';

// redux
import {useDispatch} from 'react-redux';
import {loadGameDetails} from '../actions/detailAction.js';

import {resizeImage} from '../util';

function GameCard({game}) {
  const dispatch = useDispatch();
  const loadDetailsHandler = () => {
    document.body.style.overflow = 'hidden';
    // tell redux to get the game's details and screenshots
    dispatch(loadGameDetails(game.id));
  };

  return (
    <Card onClick={loadDetailsHandler} layoutId={game.id}>
      <Link to={`/game/${game.id}`}>
        <h3>{game.name}</h3>
        <p>{game.released}</p>
        <motion.img
          src={resizeImage(game.background_image, 640)}
          alt={game.name}
          layoutId={`img_${game.id}`}
        />
      </Link>
    </Card>
  );
}

const Card = styled(motion.div)`
  height: 40rem;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 0.5rem;
  background-color: ${props => props.theme.primary};
  overflow: hidden;
  cursor: pointer;
  h3 {
    padding: 1.5rem;
  }
  img {
    width: 100%;
    min-height: 42vh;
    object-fit: cover;
    padding-top: 1rem;
  }
`;

export default GameCard;
