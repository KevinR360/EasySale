import styled from 'styled-components';

export const Category = styled.div`
  padding-top: 20px;
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .filterBar button {
    border: none;
    background: none;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .filterIcon {
      font-size: 3.5rem;
      font-weight: bold;
      color: #fff;
    }

    span {
      font-size: 1.8rem;
      font-weight: bold;
      color: #fff;
    }

    .categoryIcon {
      font-size: 3rem;
      color: #fff;
    }
  }

  @media (min-width: 1000px) {
    height: 100%;
    min-height: 660px;
    max-height: 760px;
    box-shadow: 0;
    width: 300px;
    .filterBar {
      display: none;
    }
  }
`;

export const CategoryList = styled.div`
  position: fixed;
  flex-direction: column;
  align-items: center;
  z-index: 999;
  flex: 1;
  top: 5%;
  right: 5%;
  width: 90%;
  align-self: stretch;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0.1px 0.1px 3px #333;
  display: ${props => (props.visible ? 'block' : 'none')};

  header {
    display: flex;
    border-radius: 4px 4px 0 0;
    background: #ef9457;
    height: 70px;
    width: 100%;
    color: #fff;
    align-items: center;
    justify-content: space-around;

    strong {
      display: flex;
      width: 100%;
      align-items: center;
      justify-content: space-around;
      .filterIcon {
        font-size: 3.6rem;
      }
      span {
        font-size: 2.4rem;
      }
      button {
        background: none;
        border: 0;
        .closeIcon {
          color: #fff;
          font-size: 3rem;

          &:hover {
            color: #333;
          }
        }
      }
    }
  }
  ul {
    height: 100%;
    width: 100%;
  }

  @media (min-width: 1000px) {
    display: flex;
    position: static;
    z-index: 0;
    top: none;
    right: none;
    box-shadow: 0;
    border-radius: 0;
    margin: 0;
    height: 100%;

    header {
      display: none;
    }
  }
`;

export const ItemCategory = styled.li`
  width: 100%;
  box-shadow: 0.5px 0.5px 1px #ddd;
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    width: 100%;
    height: 100%;
    padding: 16px;
    font-size: 2.4rem;
    background: none;
    border: 0;
    color: #38414e;

    &:hover {
      color: #ef9457;
    }
  }

  @media (min-width: 1000px) {
    min-height: 70px;
    box-shadow: none;
    border-bottom: 0.1px solid #ddd;
    background: ${props => (props.marked ? '#38414e' : '#fff')};

    button {
      font-size: 1.8rem;
      color: ${props => (props.marked ? '#fff' : '#38414e')};
    }
  }
`;
