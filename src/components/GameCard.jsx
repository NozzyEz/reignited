import styled from 'styled-components';
import {motion} from 'framer-motion';

function GameCard({game}) {
  const title = game.name;
  const released = game.released;
  const image = game.background_image;
  return (
    <StyledGame>
      <h3>{title}</h3>
      <p>{released}</p>
      <img src={image} alt={title} />
    </StyledGame>
  );
}

const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 0.5rem;
  background-color: ${props => props.theme.primary};
  h3 {
    padding: 1.5rem;
  }
  img {
    width: 100%;
    height: 30vh;
    object-fit: cover;
    padding: 3rem 2rem;
  }
`;

export default GameCard;
