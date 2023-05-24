import { ProductCartProps } from "@globalTypes/globalTypes";
import React from "react";
import { Divider, Space } from "antd";
import { SCProductOrderCart } from "./style";

function ProductCartItem({ avatar, name, ...props }: ProductCartProps) {
  return (
    <SCProductOrderCart>
      <Space className="__product_item">
        <img className="__image_product" src={avatar} alt="" />
        <div className="__product_info">
          <div>
            <div className="__name">{name}</div>
            <div>{`${props.category} : ${props.variant}`}</div>
          </div>
          <div className="__input_number">
            <Space>
              <div className="__increase">-</div>
              <input
                className="__input"
                type="number"
                readOnly
                value={props.quality}
              />
              <div className="__decrease">+</div>
            </Space>
          </div>
        </div>
        <div className="__price">
          <div className="__text">990.000d</div>
          <div className="__remove">remove</div>
        </div>
      </Space>
      <Divider />
    </SCProductOrderCart>
  );
}

export default ProductCartItem;
