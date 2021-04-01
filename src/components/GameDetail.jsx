import {useHistory} from 'react-router-dom';

import styled from 'styled-components';
import {motion} from 'framer-motion';

// redux
import {useSelector} from 'react-redux';

function GameDetail() {
  const {game, screenshots, isLoading} = useSelector(store => store.detail);
  const history = useHistory();

  const ExitDetailsHandler = e => {
    const isShadow = e.target.classList.contains('shadow');
    if (isShadow) {
      document.body.style.overflow = 'auto';
      history.push('/');
    }
  };
  return (
    <>
      {!isLoading && (
        <CardShadow className="shadow" onClick={ExitDetailsHandler}>
          <Detail>
            <Stats>
              <div className="rating">
                <h3>{game.name}</h3>
                <p>Rating: {game.rating}</p>
              </div>
              <Info>
                <h3>Platforms</h3>
                <Platforms>
                  {game.parent_platforms.map(index => (
                    <h3 key={index.platform.id}>{index.platform.name}</h3>
                  ))}
                </Platforms>
              </Info>
            </Stats>
            <Media>
              <img src={game.background_image} alt={game.name} />
            </Media>
            <Description>
              <p>{game.description_raw}</p>
            </Description>
            <Gallery>
              {screenshots.map(screenshot => (
                <img
                  src={screenshot.image}
                  alt={`screenshot from ${game.name}`}
                  key={screenshot.id}
                />
              ))}
            </Gallery>
          </Detail>
        </CardShadow>
      )}
    </>
  );
}

const CardShadow = styled(motion.div)`
  width: 100vw;
  min-height: 100vh;
  overflow-y: scroll;
  background: ${props => props.theme.overlay};
  position: fixed;
  top: 0;
  left: 0;
  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${props => props.theme.accent};
  }
  &::-webkit-scrollbar-track {
    background-color: ${props => props.theme.primary};
  }
`;

const Detail = styled(motion.div)`
  width: 80%;
  border-radius: 1rem;
  padding: 2rem 5rem;
  background: ${props => props.theme.primary};
  position: absolute;
  left: 10%;
  color: ${props => props.theme.text};
  /* img {
    width: 100%;
  } */
`;

const Stats = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  display: flex;
  align-items: center;
  justify-content: space-between;
  h3 {
    padding: 1.5rem 0rem;
  }
`;

const Info = styled(motion.div)`
  text-align: center;
  padding: 1rem;
  min-width: 40rem;
`;

const Platforms = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  img {
    margin-left: 3rem;
  }
`;
const Media = styled(motion.div)`
  margin-top: 5rem;
  img {
    width: 100%;
  }
`;
const Description = styled(motion.div)`
  margin: 5rem 0rem;
`;
const Gallery = styled(motion.div)`
  img {
    width: 100%;
  }
`;

export default GameDetail;
