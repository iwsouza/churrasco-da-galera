import styled from 'styled-components';

export const Wrapper = styled.header`
  width: 100%;
  max-width: 1080px;
  height: 60px;

  padding: 0 8px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  & > h1 {
    color: #ffffff;
  }

  & > nav {
    ul {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 8px;

      li {
        list-style: none;

        a {
          text-decoration: none;
          padding: 6px 8px;

          background: #9d6e18;
          color: #ffffff;
          font-size: 1rem;

          border-radius: 4px;
          text-transform: uppercase;

          &:hover {
            background: #6a490b;
          }
        }
      }
    }
  }
`;
