import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  background: #f9f9f9;
`;

export const Menu = styled.div`
  width: 100%;
  height: 100%;
  min-height: 680px;
  max-height: 780px;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  background: #38414e;

  .menuList {
    max-width: 900px;

    margin: 20px 5px;
    background: #f9f9f9;

    border-radius: 4px;

    ul {
      display: flex;
      flex: 1;
      flex-direction: column;
      height: 630px;
      max-height: 620px;
      overflow-y: scroll;
      padding: 0 4px;

      li {
        width: 100%;
        max-height: 150px;

        border-radius: 4px;
        display: flex;

        background: #fff;
        box-shadow: 0 0 1px #222;
        margin-top: 8px;
        margin: 8px 2px 0;

        button {
          height: 100%;
          width: 100%;
          min-height: 100px;
          padding: 5px;
          display: flex;
          flex-direction: row;

          img {
            align-self: flex-start;
            margin-top: 5px;
            margin-left: 4px;
            width: 80px;
            height: 80px;
            border-radius: 4px;
          }
          strong {
            display: flex;
            min-height: 80px;
            width: 100%;
            padding: 5px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            span {
              display: flex;
              flex: 1;
              align-self: flex-start;
              margin-bottom: 5px;
              color: #ef9457;
              top: 0;
            }
            p {
              display: flex;
              flex: 1;
              align-self: flex-start;
              text-align: start;
              font-size: 1.2rem;
              font-weight: normal;
              color: #999;
              margin-bottom: 16px;
            }
            .price {
              align-self: flex-end;
              color: #222;
              right: 0;
            }
          }
        }
      }
    }
  }

  @media (min-width: 900px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    padding: 0;

    .menuList {
      min-width: 450px;
      max-width: 450px;
    }
  }

  @media (min-width: 1200px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    padding: 0;

    .menuList {
      min-width: 600px;
      max-width: 600px;
    }
  }
`;
