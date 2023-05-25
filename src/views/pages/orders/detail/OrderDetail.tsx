import {
  BookOutlined,
  CarOutlined,
  CreditCardOutlined,
  HomeOutlined,
  MailOutlined,
  PhoneOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useGetOrderDetailQuery } from "@apps/services/orderService";
import Loading from "@components/loading/Loading";
import {
  convertFormatCurrency,
  getClassStatusOrder,
} from "@utils/helperFuntions";
import { Col, Row, Tag } from "antd";
import { useParams } from "react-router-dom";
import moment from "moment";
import Table, { ColumnsType } from "antd/es/table";
import { SCOrderDetail } from "./style";
import { ProductOrderInfoProps } from "@globalTypes/globalTypes";

const columns: ColumnsType<ProductOrderInfoProps> = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (_, record) => {
      return record?.products?.name;
    },
  },
  {
    title: "Quality",
    dataIndex: "quality",
    key: "quality",
    render: (_, record) => {
      return record.quantity;
    },
  },
  {
    title: "Price",
    dataIndex: "price",
    key: "price",
    render: (_) => {
      return convertFormatCurrency(_);
    },
  },
  {
    title: "Total",
    key: "total",
    dataIndex: "total",
    render: (_, record) => {
      return convertFormatCurrency(record.quantity * record.price);
    },
  },
];

export default function OrderDetail() {
  const { orderId } = useParams();
  const { data: detailOrder, isLoading: loadingDetailOrder } =
    useGetOrderDetailQuery(orderId, { skip: !orderId });
  console.log(detailOrder);

  return (
    <SCOrderDetail>
      {loadingDetailOrder && !detailOrder ? (
        <Loading isLoading={loadingDetailOrder} />
      ) : (
        <Row gutter={24}>
          <Col className="__order_info" span={8}>
            <div className="__order_info_item">
              <div className="__title">
                {`Order #${detailOrder?.orderDetail?.id}`}
                <Tag color={getClassStatusOrder(1)?.color} className="ml-20">
                  {getClassStatusOrder(1)?.text}
                </Tag>
              </div>
              <div className="__item">
                <div className="__icon">
                  <BookOutlined />
                </div>
                <div className="__text">Added</div>
                <div className="__text_value">
                  {moment(detailOrder?.orderDetail?.created_at).format(
                    "DD/MM/YYYY",
                  )}
                </div>
              </div>
              <div className="__item">
                <div className="__icon">
                  <CreditCardOutlined />
                </div>
                <div className="__text">Payment Method</div>
                <div className="__text_value">Visa</div>
              </div>
              <div className="__item">
                <div className="__icon">
                  <CarOutlined />
                </div>
                <div className="__text">Shipping Method</div>
                <div className="__text_value">Flat Shipping</div>
              </div>
            </div>
          </Col>
          <Col className="__order_info" span={8}>
            <div className="__order_info_item">
              <div className="__title">Customer</div>
              <div className="__item">
                <div className="__icon">
                  <UserOutlined />
                </div>
                <div className="__text">Customer</div>
                <div className="__text_value">
                  {detailOrder?.orderDetail?.name}
                </div>
              </div>
              <div className="__item">
                <div className="__icon">
                  <MailOutlined />
                </div>
                <div className="__text">Email</div>
                <div className="__text_value">
                  {detailOrder?.orderDetail?.email}
                </div>
              </div>
              <div className="__item">
                <div className="__icon">
                  <PhoneOutlined />
                </div>
                <div className="__text">Phone</div>
                <div className="__text_value">
                  {detailOrder?.orderDetail?.phone}
                </div>
              </div>
            </div>
          </Col>
          <Col className="__order_info" span={8}>
            <div className="__order_info_item">
              <div className="__title">Document</div>
              <div className="__item">
                <div className="__icon">
                  <BookOutlined />
                </div>
                <div className="__text">Invoice</div>
                <div className="__text_value">INV-32011</div>
              </div>
              <div className="__item">
                <div className="__icon">
                  <BookOutlined />
                </div>
                <div className="__text">Shipping</div>
                <div className="__text_value">SHP-2011REG</div>
              </div>
              <div className="__item">
                <div className="__icon">
                  <BookOutlined />
                </div>
                <div className="__text">Rewards</div>
                <div className="__text_value">480 point</div>
              </div>
            </div>
          </Col>
          <Col span={24} className="mt-25">
            <Row gutter={24}>
              <Col className="__order_info" span={16}>
                <div className="__order_info_item">
                  <div className="__title">
                    Order List
                    <Tag color="green" className="ml-20">
                      2 Products
                    </Tag>
                  </div>
                  <Table
                    columns={columns}
                    dataSource={detailOrder?.orderItems}
                    pagination={false}
                  />
                  <div className="__total_price mt-20">
                    {`Total : ${
                      detailOrder?.orderDetail?.totalPrice &&
                      convertFormatCurrency(
                        detailOrder?.orderDetail?.totalPrice,
                      )
                    }`}
                  </div>
                </div>
              </Col>
              <Col className="__order_info" span={8}>
                <Row gutter={24}>
                  <Col className="__order_info" span={24}>
                    <div className="__order_info_item">
                      <div className="__title">Address</div>
                      <div className="__item">
                        <div className="__icon">
                          <HomeOutlined />
                        </div>
                        <div>
                          <div className="__text">Billing</div>
                          <div className="__text_value">
                            {detailOrder?.orderDetail?.address}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col className="__order_info mt-25" span={24}>
                    <div className="__order_info_item">
                      <div className="__title">Order Status</div>
                      <div className="__item">
                        <div className="__icon">
                          <ShoppingCartOutlined />
                        </div>
                        <div>
                          <div className="__text">Order Placed</div>
                          <div className="__text_value">
                            An order has been placed.
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      )}
    </SCOrderDetail>
  );
}
