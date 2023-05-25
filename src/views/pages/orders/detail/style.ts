import styled from "styled-components";

export const SCOrderDetail = styled.div`
  font-family: "Open Sans", sans-serif;
  .__order_info {
    .__order_info_item {
      background-color: #fff;
      padding: 16px 24px;
      box-shadow: 0px 1.5px 2px rgba(16, 24, 40, 0.1);
      border-radius: 8px;
      border: 1px solid #e0e2e7;
      .__title {
        font-weight: 500;
        font-size: 20px;
        padding: 10px 0;
        color: #000;
      }
      .__total_price {
        text-align: end;
        font-size: 18px;
        font-weight: 600;
      }
      .__item {
        display: flex;
        align-items: center;
        margin-bottom: 14px;
        .__icon span {
          font-size: 16px;
          background-color: #e0e2e7;
          padding: 10px;
          border-radius: 50%;
          margin-right: 8px;
        }
        .__text {
          flex: 1;
          font-weight: 600;
          font-size: 15px;
        }
      }
    }
  }
`;
