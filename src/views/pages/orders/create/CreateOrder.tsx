import React from "react";
import { SCCreateOrder } from "./style";
import { Button, Col, Divider, Form, Input, Row, Space } from "antd";
import { fakeDataCarts } from "@utils/constants";
import { ProductCartProps } from "@globalTypes/globalTypes";
import ProductCartItem from "./ProductCartItem";

function CreateOrder() {
  const [form] = Form.useForm();
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  return (
    <SCCreateOrder>
      <Row gutter={24}>
        <Col span={12}>
          <>
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
              <div className="title">Title</div>
              <div>90.000d</div>
            </Space>
          </>
        </Col>
        <Col span={12}>
          <div className="title">Contact</div>
          <Form
            form={form}
            layout="vertical"
            initialValues={{ name: "", email: "", phone: "" }}
            onFinish={onFinish}
          >
            <Form.Item label="Name" required>
              <Input placeholder="Name" />
            </Form.Item>
            <Form.Item label="Email" required>
              <Input placeholder="Email" />
            </Form.Item>
            <Form.Item label="Phone" required>
              <Input placeholder="Phone" />
            </Form.Item>
            <Form.Item label="Description" required>
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
