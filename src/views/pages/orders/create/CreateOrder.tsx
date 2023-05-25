import React, { useEffect, useMemo, useState } from "react";
import { SCCreateOrder } from "./style";
import { Button, Col, Divider, Form, Input, Row, Select, Space } from "antd";
import { fakeDataCarts } from "@utils/constants";
import {
  ContactProps,
  ItemDropdownInterface,
  ProductCartProps,
} from "@globalTypes/globalTypes";
import ProductCartItem from "./ProductCartItem";
import { useGetProductsQuery } from "@apps/services/productService";

function CreateOrder() {
  const { data: products } = useGetProductsQuery(undefined);
  const [dataDropdown, setDataDropdown] = useState<
    ItemDropdownInterface[] | []
  >([]);
  const [selectedDropdown, setSelectedDropdown] = useState<string[] | []>([]);
  const [form] = Form.useForm();
  const onFinish = (values: ContactProps) => {
    console.log("Success:", values);
  };

  const initialValues = useMemo(
    () => ({
      name: "",
      email: "",
      phone: "",
      address: "",
      note: "",
    }),
    [],
  );

  const handleChange = (value: string[], option: any) => {
    console.log(option);

    setSelectedDropdown(value);
  };

  useEffect(() => {
    if (products?.data?.length) {
      setDataDropdown(
        products?.data?.map((item) => ({
          value: item?.id,
          label: item?.name,
        })),
      );
    }
  }, [products]);

  console.log(products?.data, selectedDropdown);

  return (
    <SCCreateOrder>
      <Row gutter={24}>
        <Col span={12}>
          <>
            <Space className="__choose_product_container">
              Choose Products
              <Select
                mode="multiple"
                allowClear
                style={{ width: "100%" }}
                placeholder="Please select products"
                onChange={handleChange}
                options={dataDropdown}
                value={selectedDropdown}
                className="__selection"
                filterOption={(inputValue, option) => {
                  if (option) {
                    return option.label
                      .toLowerCase()
                      .includes(inputValue.toLowerCase());
                  } else return false;
                }}
              />
            </Space>
            {fakeDataCarts.map((item: ProductCartProps) => (
              // eslint-disable-next-line react/jsx-props-no-spreading
              <ProductCartItem {...item} key={item.id} />
            ))}
            <div className="__total_info">
              <Space>
                <div className="__title">Subtotal</div>
                <div>90.000d</div>
              </Space>
              <Space>
                <div className="__title">Subtotal</div>
                <div>90.000d</div>
              </Space>
              <Space>
                <div className="__title">Subtotal</div>
                <div>90.000d</div>
              </Space>
            </div>
            <Divider />
            <Space className="__total">
              <div className="title">Total</div>
              <div>90.000d</div>
            </Space>
          </>
        </Col>
        <Col span={12}>
          <div className="title">Contact</div>
          <Form
            form={form}
            layout="vertical"
            initialValues={initialValues}
            onFinish={onFinish}
          >
            <Form.Item
              label="Name"
              required
              name="name"
              rules={[{ required: true, message: "Name is required" }]}
            >
              <Input placeholder="Name" />
            </Form.Item>
            <Form.Item
              label="Email"
              required
              name="email"
              rules={[{ required: true, message: "Email is required" }]}
            >
              <Input placeholder="Email" />
            </Form.Item>
            <Form.Item
              label="Phone"
              required
              name="phone"
              rules={[{ required: true, message: "Phone is required" }]}
            >
              <Input placeholder="Phone" />
            </Form.Item>
            <Form.Item
              label="Address"
              required
              name="address"
              rules={[{ required: true, message: "Address is required" }]}
            >
              <Input placeholder="Address" />
            </Form.Item>
            <Form.Item label="Description" name="note">
              <Input.TextArea placeholder="Description" />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="__button_submit"
              >
                Continue
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </SCCreateOrder>
  );
}

export default CreateOrder;
