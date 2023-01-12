import styled, { keyframes } from 'styled-components';

const shakeAnimation = keyframes`
  0% {
    transform: translate(0, 0);
  }
  1.78571% {
    transform: translate(5px, 0);
  }
  3.57143% {
    transform: translate(0, 0);
  }
  5.35714% {
    transform: translate(5px, 0);
  }
  7.14286% {
    transform: translate(0, 0);
  }
  8.92857% {
    transform: translate(5px, 0);
  }
  10.71429% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(0, 0);
  }
`;

export const Wrapper = styled.article`
  background: #fff;
  box-shadow: 6px 6px 10px rgba(0, 0, 0, 0.3);

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  padding: 16px 16px 14px;

  gap: 12px;

  header {
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding: 0 36px;

    h1 {
      font-size: 3rem;
      letter-spacing: 3px;
    }
    strong {
      color: #9c9b9b;
      font-size: 1.375rem;
    }
  }

  ul {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    width: 100%;

    li {
      width: 100%;
      border-top: 1px solid #000;
      padding: 6px 0 6px 12px;
      font-size: 1.125rem;
      font-weight: bold;

      &:last-child {
        border-bottom: 1px solid #000;
      }
    }
  }

  button {
    background: #f5ab00;
    border: 1px solid #f5ab00;
    border-radius: 4px;

    color: #ffffff;
    font-size: 1rem;

    cursor: pointer;

    padding: 6px 8px;

    text-transform: uppercase;
    font-weight: bold;

    &:hover {
      background: transparent;
      color: #f5ab00;
    }
  }

  &:nth-child(2) {
    scale: 1.3;
    animation: ${shakeAnimation} 2.32s ease infinite;
    transform-origin: 50% 50%;
  }
`;
