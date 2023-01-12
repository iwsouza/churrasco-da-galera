import styled from 'styled-components';

export const Main = styled.main`
  min-width: 100vw;
  min-height: 100vh;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;

  font-family: 'Bebas Neue', cursive;

  background: linear-gradient(90deg, #ec8404 -9.77%, #ffd600 127.15%);
`;

export const Container = styled.section`
  width: 100%;
  min-height: calc(100vh - 60px);
  height: 100%;
  max-width: 1080px;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 62px;
  padding: 24px 0;

  @media only screen and (max-width: 945px) {
    flex-direction: column;
  }
`;
