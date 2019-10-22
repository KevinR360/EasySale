import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
  div.Cart {
    display: ${props => (props.visibleCart ? 'flex' : 'none')};
    width: 90%;
    background: #38414e;
    position: fixed;
    top: 5%;
    right: 5%;
    margin: 0 auto;
    z-index: 999;

    flex-direction: column;
  }

  @media (min-width: 1000px) {
    display: block;
    width: 350px;
    margin: 0 16px 10px;
    div.Cart {
      display: flex;
      flex: 1;
      position: initial;
      z-index: 0;
    }
  }
`;

export const ButtonCart = styled.button`
  display: flex;
  width: 100%;
  height: 50px;
  max-height: 50px;
  align-items: center;
  justify-content: center;
  color: #fff;
  padding: 8px 16px;
  margin-bottom: 30px;

  font-size: 2rem;

  .cartSize {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 15px;
    width: 15px;
    font-size: 1rem;
    background: #ef9457;
    border-radius: 50%;
    padding: 0;
    font-weight: bold;
    margin-right: -24px;
    margin-top: -16px;
    z-index: 2;
  }
  .cartIcon {
    font-size: 3rem;
    margin-right: 8px;
  }

  @media (min-width: 1000px) {
    display: none;
  }
`;

export const TopCart = styled.aside`
  width: 100%;
  display: flex;
  padding: 8px 16px;
  align-items: center;
  justify-content: space-between;
  background: #38414e;

  span {
    color: #fff;
    font-size: 3rem;
    font-weight: bold;
  }
  button {
    color: #fff;
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: -6px;
  }

  @media (min-width: 1000px) {
    span {
      font-size: 1.8rem;
    }
    button {
      display: none;
    }
  }
`;

export const ListItens = styled.ul`
  height: 70%;
  min-height: 400px;
  max-height: 400px;
  background: #eee;
  overflow-y: auto;

  aside.emptyCart {
    display: flex;
    height: 100%;
    width: 100%;
    align-items: center;
    justify-content: center;
    min-height: 400px;
    font-size: 10rem;
    font-weight: bolder;
    color: #38414e;
  }
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 70px;
  padding: 4px 8px;
  justify-content: center;
  background: #fff;
  border-bottom: 0.1px solid #ddd;
  margin-bottom: 4px;

  header {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 8px 16px;

    .title {
      align-self: flex-start;
      padding: 0;
      display: flex;
      color: #ef9457;
      font-size: 2.4rem;
    }

    form.formItem {
      display: flex;
      width: 100%;
      align-items: center;
      justify-content: space-between;

      .qtd {
        display: flex;
        align-items: center;
        span {
          font-weight: bold;
          margin: 0 4px;
        }

        button {
          font-size: 2rem;
          color: #ef9457;
          margin-top: 4px;
        }
        input {
          text-align: center;
          font-size: 1.4rem;
          width: 40px;
          padding: 4px;
          border: 0;
          border-radius: 4px;
          background: rgba(0, 0, 0, 0.1);
          margin: 0 4px;
        }
      }

      button.exclude {
        margin: 8px 16px;
        font-size: 2.4rem;
        color: #38414e;
      }
    }
  }

  strong.StrongPrice {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    padding: 8px 16px;

    span {
      font-size: 1.8rem;
    }
  }

  @media (min-width: 1000px) {
    header {
      .title {
        font-size: 1.6rem;
      }

      form.formItem {
        span {
          font-size: 1.6rem;
        }
      }
    }
    strong {
      span.price {
        font-weight: normal;
        font-size: 1.4rem;
      }
      span.Subtotal {
        font-weight: bold;
        font-size: 1.4rem;
      }
    }
  }
`;

export const Infos = styled.div`
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: space-around;

  form {
    background: #fff;
    div {
      max-height: 45px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      padding: 8px 16px;

      span {
        font-size: 1.8rem;
      }
      p {
        font-size: 1.8rem;
      }
      strong {
        font-size: 2rem;
      }

      input {
        width: 80px;
        padding: 4px;
        border-radius: 4px;
        border: 0;
        background: rgba(0, 0, 0, 0.1);
      }
    }
  }

  button {
    height: 60px;
    width: 100%;
    align-self: stretch;
    background: #1dcda8;
    font-size: 2.4rem;
    color: #fff;
    font-weight: bold;

    &:hover {
      background: ${lighten(0.03, '#1dcda8')};
    }
  }
`;
