import styled from 'styled-components';

export const Wrapper = styled.div`
  @keyframes opacity {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  font-family: 'Bebas Neue', cursive;

  width: 100vw;
  height: 100vh;

  top: 0;
  left: 0;

  z-index: 150;

  display: flex;
  position: fixed;
  align-items: center;
  justify-content: center;

  transition: 0.3s linear;
  animation: opacity 0.3s linear;

  backdrop-filter: blur(3px);
  background-color: rgba(45, 51, 56, 0.5);

  & > div {
    background: #fff;
    width: 50vw;
    height: 250px;

    padding: 16px 24px;
    border-radius: 12px;

    position: relative;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    gap: 8px;

    & > button {
      border: 0;
      background: transparent;

      font-size: 1.125rem;
      position: absolute;

      right: 22px;
      top: 12px;

      cursor: pointer;

      &:hover {
        color: #bbb;
      }
    }

    h1 {
      font-size: 3rem;
    }
    span {
      font-size: 1.275rem;
    }
  }
`;
