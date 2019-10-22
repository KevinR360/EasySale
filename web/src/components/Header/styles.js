import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  div.header {
    background: #2a313d;
    height: 70px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  div.header h1 {
    color: #fff;
    margin-top: 10px;
  }
  div.header span {
    margin-right: -110px;
    color: #f2f2f2;
    font-size: 1.2rem;
  }
`;

export const WhiteBar = styled.div`
  height: 100px;
  width: 100%;
  background: linear-gradient(-5deg, #2a313d, #eee, #2a313d);
  box-shadow: 0 0 3px #2b2b2b;
  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    color: #ef9457;
    word-spacing: 8px;
    font-size: 3.6rem;
  }
`;
