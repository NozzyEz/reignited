import {Link} from 'react-router-dom';

import styled from 'styled-components';
import {motion} from 'framer-motion';

// redux
import {useDispatch} from 'react-redux';
import {loadGameDetails} from '../actions/detailAction.js';

function GameCard({game}) {
  const title = game.name;
  const released = game.released;
  const image = game.background_image;

  const dispatch = useDispatch();
  const loadDetailsHandler = () => {
    document.body.style.overflow = 'hidden';
    dispatch(loadGameDetails(game.id));
  };

  return (
    <Card onClick={loadDetailsHandler}>
      <Link to={`/game/${game.id}`}>
        <h3>{title}</h3>
        <p>{released}</p>
        <img src={image} alt={title} />
      </Link>
    </Card>
  );
}

const Card = styled(motion.div)`
  height: 40vh;
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
    height: 40vh;
    object-fit: cover;
    padding-top: 1rem;
  }
`;

export default GameCard;
