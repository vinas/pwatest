import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  background-color: #fff;
  bottom: 20px;
  left: 20px;
  right: 20px;
  border-radius: 12px;
  padding: 10px;

  a {
    display: block;
    text-decoration: none;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Cover = styled.img`
  height: 115px;
  margin-right: 15px;

  @media (min-width: 320px) and (max-width: 480px) {
    height: 90px;
    margin-right: 10px;
  }
`;

export const Info = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  color: #3b3a3e;

  .title {
    font-size: 18px;
    margin-bottom: 10px;
  }

  .discount {
    color: #7f8c8d;
    text-decoration: line-through;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    .title {
      font-size: 15px;
      margin-bottom: 10px;
    }

    .book-rating {
      font-size: 12px;
    }

    .price {
      font-size: 12px;
    }
  }
`;

export const ActionButtons = styled.div`
  margin-left: 5px;
  padding: 0;
  height: 150px;

  .close {
    position: absolute;
    right: 10px;
  }

  .close:hover {
    cursor: pointer;
  }

  .button {
    display: block;
    background-color: #2ecc71;
    border-radius: 5px;
    line-height: 0;
    margin-top: 50px;
  }
`;
