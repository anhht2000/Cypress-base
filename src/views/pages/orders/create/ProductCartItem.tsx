import { ProductCartProps } from "@globalTypes/globalTypes";
import React from "react";
import { Divider, Radio, Space } from "antd";
import { SCProductOrderCart } from "./style";
import { urlNoImage } from "@utils/constants";
import { convertFormatCurrency } from "@utils/helperFuntions";

interface ProductCartItemProps extends ProductCartProps {
  selectedProducts: ProductCartProps[];
  setSelectedProducts: React.Dispatch<React.SetStateAction<ProductCartProps[]>>;
  handleRemove: (id: string) => void;
}

function ProductCartItem({
  avatar,
  name,
  price,
  setSelectedProducts,
  ...props
}: ProductCartItemProps) {
  const handleIncreasePrice = () => {
    setSelectedProducts(
      props.selectedProducts.map((x) =>
        x.id === props.id ? { ...x, quantity: (props.quantity || 1) + 1 } : x,
      ),
    );
  };

  const handleDecreasePrice = () => {
    if (props.quantity > 1) {
      setSelectedProducts(
        props.selectedProducts.map((x) =>
          x.id === props.id ? { ...x, quantity: (props.quantity || 1) - 1 } : x,
        ),
      );
    }
  };

  return (
    <SCProductOrderCart>
      <Space className="__product_item">
        <img
          className="__image_product"
          src={
            (process.env.REACT_APP_API_BASE_URL_IMAGE &&
              avatar !== "#" &&
              process.env.REACT_APP_API_BASE_URL_IMAGE + "/" + avatar) ||
            urlNoImage
          }
          alt="no_image"
        />
        <div className="__product_info">
          <div>
            <div className="__name">{name}</div>
            <div>
              {`${props.product_categories.name} : `}
              <>
                <Radio.Group buttonStyle="solid">
                  {JSON.parse(props.product_categories.variants) &&
                    JSON.parse(props.product_categories.variants).map(
                      (item: string[], index: number) => (
                        <Radio.Button value="a" key={index}>
                          {item}
                        </Radio.Button>
                      ),
                    )}
                </Radio.Group>
              </>
            </div>
          </div>
          <div className="__input_number">
            <Space>
              <div className="__increase" onClick={handleDecreasePrice}>
                -
              </div>
              <input
                className="__input"
                type="number"
                readOnly
                value={props.quantity || 1}
              />
              <div className="__decrease" onClick={handleIncreasePrice}>
                +
              </div>
            </Space>
          </div>
        </div>
        <div className="__price">
          <div className="__text">{convertFormatCurrency(price)}</div>
          <div
            className="__remove"
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            onClick={() => props.handleRemove(props.id as any)}
          >
            remove
          </div>
        </div>
      </Space>
      <Divider />
    </SCProductOrderCart>
  );
}

export default ProductCartItem;
