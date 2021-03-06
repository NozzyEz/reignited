import {useHistory} from 'react-router-dom';
import styled from 'styled-components';
import {motion} from 'framer-motion';

// redux
import {useSelector} from 'react-redux';

// util function that takes a url and returns a url that produces a lower resolution image
import {resizeImage} from '../util';

// Platform icons
import appleIcon from '../img/apple.svg';
import linuxIcon from '../img/linux.svg';
import pcIcon from '../img/steam.svg';
import gamepadIcon from '../img/gamepad.svg';
import switchIcon from '../img/nintendo.svg';
import xboxIcon from '../img/xbox.svg';
import psIcon from '../img/playstation.svg';
import iosIcon from '../img/ios.svg';
import androidIcon from '../img/android.svg';
// Stars used for ratings
import starFull from '../img/star-full.png';
import starEmpty from '../img/star-empty.png';

function GameDetail({id}) {
  // Get the details and screenshots about the game from Redux
  const {game, screenshots, isLoading} = useSelector(store => store.detail);
  const history = useHistory();
  // Parse the id to a number to keep it consistent, we need to do this for animation purposes
  const parsedId = parseInt(id);

  //* handles what happens when we click outside the details card
  const ExitDetailsHandler = e => {
    // see if what we click on is the shadow
    const isShadow = e.target.classList.contains('shadow');
    // if it is, make main page scrollable and change the url to the root to reflect that we're closed
    if (isShadow) {
      document.body.style.overflow = 'auto';
      history.push('./');
    }
  };

  //* Gets the platform name and returns an svg icon based on result
  const platformIconHandler = platform => {
    switch (platform) {
      case 'PC':
        return pcIcon;
      case 'PlayStation':
        return psIcon;
      case 'Xbox':
        return xboxIcon;
      case 'Apple Macintosh':
        return appleIcon;
      case 'Nintendo':
        return switchIcon;
      case 'Linux':
        return linuxIcon;
      case 'iOS':
        return iosIcon;
      case 'Android':
        return androidIcon;
      default:
        return gamepadIcon;
    }
  };

  //* Renders the amount of full and empty stars based on the rating received
  const ratingsHandler = rating => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(<img src={i <= Math.floor(rating) ? starFull : starEmpty} key={i} alt="star" />);
    }
    return stars;
  };

  return (
    <>
      {!isLoading && (
        <CardShadow className="shadow" onClick={ExitDetailsHandler}>
          <Detail layoutId={parsedId}>
            <Stats>
              <Ratings>
                <h3>{game.name}</h3>
                <p>Rating: {ratingsHandler(game.rating)}</p>
                <p>{game.rating}</p>
              </Ratings>
              <PlatformsContainer>
                <h3>Platforms</h3>
                <Platforms>
                  {game.parent_platforms.map(index => (
                    <img
                      key={index.platform.id}
                      src={platformIconHandler(index.platform.name)}
                      alt={index.platform.name}
                    />
                  ))}
                </Platforms>
              </PlatformsContainer>
            </Stats>
            <SplashImage>
              <motion.img
                src={resizeImage(game.background_image, 1280)}
                alt={game.name}
                layoutId={`img_${parsedId}`}
              />
            </SplashImage>
            <InfoContainer>
              <Info>
                {game.developers && game.developers.length !== 0 && (
                  <h4>Developer: {game.developers[0].name}</h4>
                )}
                {game.publishers && game.publishers.length !== 0 && (
                  <h4>Publisher: {game.publishers[0].name}</h4>
                )}
                {game.tba && <h4>Released: TBA</h4>}
                {game.released && <h4>Released: {game.released}</h4>}
                {game.esrb_rating && <h4>ESRB: {game.esrb_rating.name}</h4>}
                {!game.esrb_rating && <h4>ESRB: None</h4>}
              </Info>
              <Description>
                <h4>Description:</h4>
                <p>
                  <div dangerouslySetInnerHTML={{__html: game.description}}></div>
                </p>
              </Description>
            </InfoContainer>
            <Gallery>
              {screenshots.map(screenshot => (
                <img
                  src={resizeImage(screenshot.image, 640)}
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
  z-index: 5;
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
  min-height: 90%;
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
  h3 {
    padding: 1.5rem 0rem;
  }
`;
const Ratings = styled(motion.div)`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-between;
  p {
    display: flex;
    align-items: center;
  }
`;

const PlatformsContainer = styled(motion.div)`
  text-align: center;
  padding: 1rem;
  /* min-width: 40rem; */
`;

const Platforms = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  img {
    margin: 0rem 2rem;
    width: 3rem;
  }
`;
const SplashImage = styled(motion.div)`
  margin-top: 5rem;
  text-align: center;
  img {
    width: 90%;
  }
`;
const InfoContainer = styled(motion.div)`
  display: flex;
  align-items: flex-start;
  margin: 3rem 0rem;
`;
const Info = styled(motion.div)`
  flex: 1 1 200rem;
  h4 {
    margin-bottom: 1rem;
  }
`;
const Description = styled(motion.div)`
  flex: 1 1 200rem;
  h3 {
    margin-top: 1rem;
    font-size: 1.8rem;
  }
  p {
    text-align: justify;
  }
`;
const Gallery = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  img {
    width: 25%;
    object-fit: cover;
    margin: 2rem 1rem;
  }
`;

export default GameDetail;
