import {createGlobalStyle} from 'styled-components';
import Montserrat from '../fonts/Montserrat-Regular.ttf';
import AbrilFatFace from '../fonts/AbrilFatface-Regular.ttf';

export const Theme = {
  primary: '#ffffff',
  secondary: '#5a1a1a',
  accent: '#901e1e',
  background: '#512f30',
  overlay: 'rgba(0,0,0,0.5)',
  text: '#2c2b2b',
  nav: '',
};

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Montserrat';
    src: url(${Montserrat});
  }
  @font-face {
    font-family: 'Abril Fatface';
    src: url(${AbrilFatFace});
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    &::-webkit-scrollbar {
      width: 0.5rem;
    }
    &::-webkit-scrollbar-thumb {
      background-color: ${props => props.theme.accent}
    }
    &::-webkit-scrollbar-track {
    background-color: ${props => props.theme.primary};
  }
  }

  body {
    font-family: 'Montserrat';
    background-color: ${props => props.theme.background};
    color: ${props => props.theme.text}
  }
  
  h1 {
    font-size: 3rem;
    font-family: 'Abril Fatface';
  }
  h2 {
    font-size: 3.2rem;
    font-family: 'Abril Fatface';
  }
  h3 {
    font-size: 2.4rem
  }
  h4 {
    font-size: 2rem
  }
  p {
    font-size: 1.6rem
  }
  a {
    text-decoration: none;
    color: ${props => props.theme.text}
  }
  ul {
    list-style: none;
  }
  button {
    font-family: 'Montserrat';
    font-size: 2rem;
    border: none;
    padding: 0.6rem 3.2rem;
    background-color: ${props => props.theme.background};
    color: ${props => props.theme.primary};
    outline: none;
    transition: all 0.2s ease-in-out;
    &:hover {
    color: ${props => props.theme.background};
    background-color: ${props => props.theme.primary};
    }
    &:focus {
      outline: black solid 1px;
    }

  }
`;

export default GlobalStyles;
