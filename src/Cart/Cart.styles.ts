import styled from 'styled-components';

export const Wrapper = styled.aside`
  font-family: Arial, Helvetica, sans-serif;
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
