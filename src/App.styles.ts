import styled from 'styled-components';
import IconButton from '@material-ui/core/IconButton';

export const Wrapper = styled.div`
  margin: 40px;

  .title {
    text-align: center;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
      'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  }
`;

export const StyledButton = styled(IconButton)`
  position: fixed;
  z-index: 100;
  right: 20px;
  top: 20px;
  background-color: #555;
  color: white;
  transition: 0.2s ease-in-out;
  &:hover {
    opacity: 0.7;
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.6rem;
  background-color: #008db0;
  padding: 2rem;
  color: #fec20c;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
    'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
`;
