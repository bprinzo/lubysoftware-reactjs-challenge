import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;

  a {
    text-decoration: none;
  }

  div:last-child {
    border-bottom: 0;
  }
`;
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 68px;
  background-color: #1f1f1f;

  margin-bottom: 50px;

  svg {
    margin-left: 20px;
  }

  h1 {
    font-size: 17px;
    margin-right: 50%;
    transform: translateX(50%);
    color: #fff;
  }
`;

export const Card = styled.div`
  border-bottom: 1px solid #7070705a;
  padding: 25px 0 25px 0;

  &:last-child {
    padding-bottom: 100px;
  }
`;

export const CardContainer = styled.div`
  margin-left: 30px;
  p {
    font-size: 15px;
    font-weight: lighter;
    max-width: 90%;
    line-height: 1.6;
  }
  div {
    margin: 8px 30px 0 0;
    display: flex;
    justify-content: space-between;

    p {
      margin-right: 80%;
    }
  }
`;
