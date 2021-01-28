import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;

  img {
    height: 115pt;
    border-radius: 50%;
    border: 3pt solid #fff;
    position: absolute;
    top: 68.5pt;

    left: 50%;
    transform: translateX(-50%);
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  height: 126pt;
  padding-top: 25pt;
  background-color: #1f1f1f;
  margin-bottom: 100pt;

  h1 {
    margin-left: 12px;
    font-size: 17pt;
  }

  a {
    display: flex;
    text-decoration: none;
    color: #fff;
    font-size: 17pt;
    font-weight: lighter;

    svg {
      margin: 0 20pt 0 12pt;
    }
  }
`;

export const Content = styled.div`
  margin: 0 0 50pt 24pt;
  margin-bottom: 50pt;

  h1 {
    text-transform: uppercase;
    font-size: 1.6em;
    margin-bottom: 16px;
  }
  p {
    font-weight: lighter;
    font-size: 1em;
    line-height: 1.6;
  }
`;

export const MiddleContent = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: space-between;
  padding: 0 20pt 0pt 20pt;
  background-color: #5252525d;
  margin-bottom: 50pt;
  height: 97pt;

  a {
    text-decoration: none;
    color: #fff;
  }

  h1 {
    font-size: 40pt;
  }
  p {
    font-weight: lighter;
    font-size: 17pt;
  }
`;
