import styled from 'styled-components';

function Footer() {
  return (
    <FooterStyled>
      <a href="https://www.nozzy.org">
        <h3>Created by: Mark Sahlgreen &copy; 2021</h3>
      </a>
      <h4>Data imported from RAWG.io</h4>
    </FooterStyled>
  );
}

export default Footer;

const FooterStyled = styled('div')`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  color: ${props => props.theme.primary};
  min-height: 6vh;
  width: 100%;
  background-color: ${props => props.theme.secondary};
  padding: 0rem 5rem;
  a {
    color: ${props => props.theme.primary};
  }
`;
