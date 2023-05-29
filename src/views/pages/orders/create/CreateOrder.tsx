/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useMemo, useState } from "react";
import { Button, Col, Divider, Form, Input, Row, Select, Space } from "antd";
import {
  ContactProps,
  ItemDropdownInterface,
  ProductCartProps,
} from "@globalTypes/globalTypes";
import ProductCartItem from "./ProductCartItem";
import { useGetProductsQuery } from "@apps/services/productService";
import { convertFormatCurrency, grandTotal } from "@utils/helperFuntions";
import { useCreateOrderMutation } from "@apps/services/orderService";
import { toast } from "react-toastify";
import { SCCreateOrder } from "./style";

function CreateOrder() {
  const { data: products } = useGetProductsQuery(undefined);
  const [createOrder, { isLoading }] = useCreateOrderMutation();
  const [dataDropdown, setDataDropdown] = useState<
    ItemDropdownInterface[] | []
  >([]);
  const [selectedDropdown, setSelectedDropdown] = useState<string[]>([]);
  const [selectedProducts, setSelectedProducts] = useState<ProductCartProps[]>(
    [],
  );
  const [form] = Form.useForm();
  const onFinish = async (values: ContactProps) => {
    const data = {
      ...values,
      carts: selectedProducts?.map((item) => ({
        id: item?.id,
        quantity: item?.quantity || 1,
      })),
    };

    const result: any = await createOrder(data);
    if (result.data) {
      toast.success(result.data.message);
    }
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
    setSelectedDropdown(value);
  };

  const handleRemove = (id: string) => {
    setSelectedDropdown(selectedDropdown?.filter((item) => item !== id));
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
    if (selectedDropdown) {
      const newData = products?.data?.filter((item) =>
        selectedDropdown.includes(item.id as any),
      ) as ProductCartProps[];
      const oldData = selectedProducts;
      const data = newData?.map((item, i) =>
        Object.assign(
          {},
          item,
          oldData.find((x) => x.id === item.id),
        ),
      );
      setSelectedProducts(data);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [products, selectedDropdown]);

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
            {selectedProducts?.length ? (
              selectedProducts.map((item: any) => (
                // eslint-disable-next-line react/jsx-props-no-spreading
                <ProductCartItem
                  {...item}
                  key={item.id}
                  setSelectedProducts={setSelectedProducts}
                  selectedProducts={selectedProducts}
                  handleRemove={handleRemove}
                />
              ))
            ) : (
              <></>
            )}
            {selectedProducts?.length ? (
              <>
                <div className="__total_info">
                  <Space>
                    <div className="__title">Subtotal</div>
                    <div>
                      {convertFormatCurrency(grandTotal(selectedProducts))}
                    </div>
                  </Space>
                  <Space>
                    <div className="__title">Ship</div>
                    <div>{convertFormatCurrency(0)}</div>
                  </Space>
                </div>
                <Divider />
                <Space className="__total">
                  <div className="title">Total</div>
                  <div>
                    {convertFormatCurrency(grandTotal(selectedProducts))}
                  </div>
                </Space>
              </>
            ) : (
              <></>
            )}
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
                disabled={isLoading}
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
