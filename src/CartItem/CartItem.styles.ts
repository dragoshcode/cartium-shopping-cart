import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
    'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  border-bottom: 1px solid lightblue;
  padding-bottom: 20px;

  h3 {
    margin-top: 1rem;
  }

  div {
    flex: 1;
  }

  .information,
  .buttons {
    display: flex;
    justify-content: space-between;
    margin-top: 0.5rem;
  }

  p {
    margin-top: 0.5rem;
  }

  img {
    max-width: 80px;
    object-fit: contain;
    margin-left: 40px;
  }
`;
