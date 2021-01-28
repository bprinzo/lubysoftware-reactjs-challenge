import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  place-content: center;

  width: 100%;

  img {
    height: 98pt;
  }

  form {
    margin: 56px 0;
    max-width: 340pt;
    height: 56pt;
    text-align: center;

    input {
      border-radius: 12px;
      width: 100%;
      height: 100%;
      padding: 16px;

      border: 2px solid #292929;
      margin-bottom: 18px;
      font-size: 20pt;

      &::placeholder {
        font-weight: regular;
        color: #535353;
      }
    }

    button {
      border-radius: 12px;
      width: 100%;
      height: 100%;
      color: #030202;
      font-weight: bold;
      border: 0;
      font-size: 20pt;

      background: #ffce00;

      svg {
        margin-left: 8px;
        position: relative;
        top: 0.15em;
      }

      &:hover {
        background: ${shade(0.2, '#ffce00')};
      }
    }
  }
`;
