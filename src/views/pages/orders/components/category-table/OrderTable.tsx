import { DeleteOutlined, EditOutlined, EyeOutlined } from "@ant-design/icons";
import { OrderInfoProps, QueryProps } from "@globalTypes/globalTypes";
import { Button, Space, Table } from "antd";
import { ColumnsType } from "antd/es/table";
import { TableRowSelection } from "antd/es/table/interface";
import moment from "moment";
import { useState } from "react";
import { Link } from "react-router-dom";
import { convertFormatCurrency } from "@utils/helperFuntions";

interface Props {
  data: OrderInfoProps[];
  total: number;
  perPage: number;
  currentPage: string | number | undefined;
  onDelete?: (id: string) => void;
  onNavigate?: (id: string) => void;
  onSearch: (value: Partial<QueryProps>) => void;
}

const OrderTable = ({
  data,
  total,
  perPage,
  onDelete,
  onNavigate,
  currentPage,
  onSearch,
}: Props) => {
  const [checkStrictly] = useState(false);

  /**
   * define columns
   */
  const columns: ColumnsType<OrderInfoProps> = [
    {
      title: "Oder ID",
      dataIndex: "code",
      key: "code",
      fixed: "left",
      align: "left",
      render: (_) => {
        return <Link to={"/orders/" + _}>{"#" + _}</Link>;
      },
    },
    {
      title: "Date",
      dataIndex: "updated_at",
      key: "updated_at",
      fixed: "left",
      align: "center",
      render: (record) => moment(record).format("DD/MM/YYYY"),
    },
    {
      title: "Customer",
      dataIndex: "name",
      key: "name",
      fixed: "left",
      align: "center",
    },
    {
      title: "Total",
      dataIndex: "totalPrice",
      key: "totalPrice",
      fixed: "left",
      align: "center",
      render: (record) => convertFormatCurrency(record),
    },
    {
      title: "Action",
      dataIndex: "id",
      key: "action",
      align: "center",
      render: (value, item) => (
        <Space className="action-button">
          <Button
            type="link"
            icon={<EyeOutlined />}
            onClick={() => onNavigate && onNavigate(value)}
          />
          <Button
            ghost
            type="link"
            icon={<EditOutlined />}
            onClick={() => onNavigate && onNavigate(value)}
          />
          <Button
            type="link"
            icon={<DeleteOutlined />}
            onClick={() => onDelete && onDelete(item?.code)}
          />
        </Space>
      ),
    },
  ];

  /**
   * function handle selected row
   */
  const rowSelection: TableRowSelection<OrderInfoProps> = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows,
      );
    },
    onSelect: (record, selected, selectedRows) => {
      console.log(record, selected, selectedRows);
    },
    onSelectAll: (selected, selectedRows, changeRows) => {
      console.log(selected, selectedRows, changeRows);
    },
  };

  return (
    <Table
      rowKey="id"
      dataSource={data}
      columns={columns}
      rowSelection={{ ...rowSelection, checkStrictly }}
      scroll={{ x: "100%" }}
      pagination={{
        pageSize: perPage,
        total: total,
        current: currentPage ? +currentPage : 0,
        onChange: (page) => {
          onSearch({
            page,
          });
        },
      }}
    />
  );
};

export default OrderTable;
