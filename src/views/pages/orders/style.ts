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

export const SCOrderList = styled.div`
  .category-header {
    margin-bottom: 24px;
    .__title {
      font-weight: 500;
      font-size: 24px;
      line-height: 32px;
    }
    .__extra {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      align-items: center;
      gap: 12px;
      .__button {
        .custom-btn {
          gap: 4px;
          height: 40px;
          font-weight: 600;
          font-size: 14px;
        }
        .export-button {
          margin-right: 16px;
          color: #5c59e8;
          border: unset;
        }
      }
    }
  }
  .content-wrapper {
    .__action {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      margin-bottom: 24px;
      .__input {
        .custom-search {
          width: 320px;
          height: 40px;
          background: #ffffff;
          border: 1px solid #e0e2e7;
          .anticon-search {
            font-size: 18px;
            margin-right: 8px;
          }
          input:placeholder {
            font-size: 14px;
            line-height: 20px;
            letter-spacing: 0.005em;
            color: #858d9d;
          }
        }
      }
      .__filter {
        button {
          width: 98px;
          height: 40px;
          background: #ffffff;
          border: 1px solid #e0e2e7;
        }
      }
    }
  }
`;
