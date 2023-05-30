import { Button, Dropdown, Input, Space, Spin } from "antd";
import CustomBreadcrumb from "@components/custom-breadcrumb/CustomBreadcrumb";
import {
  ExclamationCircleFilled,
  ExportOutlined,
  FilterOutlined,
  PlusOutlined,
  SearchOutlined,
} from "@ant-design/icons";
// import CategoryTable from "./components/category-table/CategoryTable";
import { QueryProps } from "@globalTypes/globalTypes";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import modal from "antd/es/modal";
import { SCOrderList } from "./style";
import { breadcrumbs } from "@utils/breadcrumb";
import OrderTable from "./components/category-table/OrderTable";
import {
  useDeleteOrderMutation,
  useGetOrdersQuery,
} from "@apps/services/orderService";

const items = [{ key: "1", label: "Test" }];

export default function ProductCategories() {
  const [search, setSearch] = useState<QueryProps>({
    per_page: 10,
    page: 1,
    keyword: "",
  });

  /**
   * query get data
   */
  const { data: ordersData, isFetching } = useGetOrdersQuery(search);
  const navigate = useNavigate();

  const [deleteOrder, { isLoading: loadingRemove }] = useDeleteOrderMutation();

  /**
   * function handle search
   * @param values
   */
  const onSearch = (values: Partial<QueryProps>) => {
    if (values) setSearch({ ...search, ...values });
  };

  /**
   * handle navigate when click view and edit button
   * @param id
   */
  const onNavigate = (id: string | undefined) => {
    if (id) {
      navigate(`/orders/${id}`);
    } else navigate(`/orders/create`);
  };

  /**
   * function that handle delete category
   * @param id
   */
  const onDelete = async (id: string) => {
    if (!loadingRemove) {
      modal.confirm({
        title: "Do you Want to delete these items?",
        icon: <ExclamationCircleFilled />,
        content: "This action can not undo, so do you want to continue?",
        async onOk() {
          const data = await deleteOrder(id).unwrap();
          if (data) {
            toast.success(data.message);
          }
        },
      });
    }
  };

  return (
    <SCOrderList>
      <Spin spinning={isFetching}>
        <div className="category-header">
          <div className="__title">
            <span>Orders</span>
          </div>
          <div className="__extra">
            <div className="__breadcrumbs">
              <CustomBreadcrumb
                items={breadcrumbs.productCategory}
                separator=">"
              />
            </div>
            <Space className="__button">
              <Button
                icon={<ExportOutlined />}
                className="export-button custom-btn light-background"
              >
                Export
              </Button>
              <Button
                icon={<PlusOutlined />}
                type="primary"
                className="custom-btn primary-background"
                onClick={() => onNavigate(undefined)}
              >
                Add Order
              </Button>
            </Space>
          </div>
        </div>
        <div className="content-wrapper">
          <Space className="__action">
            <div className="__input">
              <Input
                placeholder="Search category. . ."
                className="custom-search"
                prefix={<SearchOutlined sizes="18px" />}
                onPressEnter={(e: React.KeyboardEvent<HTMLInputElement>) => {
                  const value = (e?.target as HTMLInputElement).value;
                  if (value || value === "") {
                    onSearch({ keyword: value, page: 1 });
                  }
                }}
              />
            </div>
            <div className="__filter">
              <Dropdown menu={{ items }} placement="bottomLeft">
                <Button>
                  <Space>
                    <FilterOutlined />
                    Filter
                  </Space>
                </Button>
              </Dropdown>
            </div>
          </Space>
          <div className="__table">
            <OrderTable
              data={ordersData?.data ?? []}
              total={ordersData?.total ?? 1}
              perPage={ordersData?.per_page ?? 10}
              currentPage={search.page}
              onSearch={onSearch}
              onNavigate={onNavigate}
              onDelete={onDelete}
            />
          </div>
        </div>
      </Spin>
    </SCOrderList>
  );
}
