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
        <motion.img
          src={resizeImage(game.background_image, 640)}
          alt={game.name}
          layoutId={`img_${game.id}`}
        />
        <CardInfo>
          <h3>{game.name}</h3>
          <p>{game.released}</p>
        </CardInfo>
      </Link>
    </Card>
  );
}

const Card = styled(motion.div)`
  height: 45rem;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 0.8rem;
  background-color: ${props => props.theme.primary};
  overflow: hidden;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  text-align: start;
  img {
    width: 100%;
    height: 30vh;
    object-fit: cover;
    /* padding-top: 1rem; */
  }
`;

const CardInfo = styled(motion.div)`
  height: 10rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  text-align: center;
  margin: 1rem;
`;

export default GameCard;
