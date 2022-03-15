import styled from 'styled-components';

export const Wrapper = styled.aside`
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
    'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  width: 350px;
  padding: 20px;

  h2 {
    margin-top: 1rem;
  }

  p {
    margin-top: 1rem;
  }

  @media (min-width: 660px) {
    width: 500px;
  }
`;
