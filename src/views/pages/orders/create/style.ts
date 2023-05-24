import styled from "styled-components";

export const SCCreateOrder = styled.div`
  background-color: #ffffff;
  padding: 48px;
  .__total_info {
    display: flex;
    flex-direction: column;
    .ant-space {
      width: 100%;
      justify-content: space-between;
      font-size: 14px;
      padding: 2px;
    }
  }
  .__total {
    display: flex;
    justify-content: space-between;
  }
  .__button_submit {
    width: 100%;
  }
`;

export const SCProductOrderCart = styled.div`
  padding: 10px;
  .__product_item {
    align-items: stretch;
    .__image_product {
      width: 100px;
      height: 100px;
      object-fit: cover;
      border-radius: 5px;
    }
    .__product_info {
      width: 100%;
      height: 100%;
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .__input_number {
        width: 50%;
        input {
          outline: none;
          width: 100%;
          cursor: unset;
        }

        .__increase {
          cursor: pointer;
          font-size: 20px;
          font-weight: 600;
        }
        .__decrease {
          cursor: pointer;
          font-weight: 600;
          font-size: 20px;
        }
      }
    }
    .__price {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .__text {
      }
      .__remove {
        text-decoration: underline;
        font-size: 12px;
        color: red;
        cursor: pointer;
      }
    }
  }
`;
