import {useState} from 'react';
import {motion} from 'framer-motion';
import styled from 'styled-components';

import logo from '../img/logo.svg';

import {loadSearch} from '../actions/gamesAction';
import {useDispatch} from 'react-redux';

function Nav() {
  const dispatch = useDispatch();
  const [input, setInput] = useState('');

  //* Hanlde search from input
  const inputHandler = e => {
    setInput(e.target.value);
  };

  const submitSearchHandler = e => {
    e.preventDefault();
    dispatch(loadSearch(input));
    setInput('');
  };
  return (
    <Navbar>
      <Title>
        <img src={logo} alt="logo" />
        <h1>Reignitined</h1>
      </Title>
      <Search onSubmit={submitSearchHandler}>
        <input value={input} onChange={inputHandler} type="text" />
        <button type="submit">Search</button>
      </Search>
    </Navbar>
  );
}

const Navbar = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: ${props => props.theme.primary};
  min-height: 12vh;
  width: 100%;
  background-color: ${props => props.theme.secondary};
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.4);
  position: sticky;
  top: 0;
  padding: 1rem;
`;

const Title = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  width: 22rem;
  margin-bottom: 1.5rem;
  img {
    width: 5rem;
  }
`;

const Search = styled(motion.form)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  width: 50rem;
  margin: 1rem 0rem;
  input {
    width: 100%;
    font-size: 2.5rem;
    padding: 0.2rem;
    outline: none;
    margin-right: 2rem;
    border: 1px solid black;
    box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.5);
    font-family: 'Montserrat';
    &:focus {
      outline: black solid 1px;
    }
  }
`;

export default Nav;
