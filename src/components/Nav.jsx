import {motion} from 'framer-motion';
import styled from 'styled-components';

function Nav() {
  return (
    <Navbar>
      <h1>Reignitined</h1>
      <Search>
        <input type="text" />
        <button>Search</button>
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
  min-height: 8vh;
  width: 100%;
  background-color: ${props => props.theme.secondary};
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.4);
  position: sticky;
  top: 0;
  padding: 1rem;
`;

const Search = styled(motion.div)`
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
  }
`;

export default Nav;
