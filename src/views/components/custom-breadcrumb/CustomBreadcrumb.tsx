import { Breadcrumb } from "antd";
import { ItemType } from "antd/es/breadcrumb/Breadcrumb";
import { Link } from "react-router-dom";
import { SCCustomBreadCrumb } from "./style";

interface IProps {
  items: ItemType[];
  separator: string;
}

const CustomBreadcrumb = ({ items, separator }: IProps) => {
  const itemRender = (
    item: ItemType,
    params: string,
    items: ItemType[],
    paths: string[],
  ) => {
    const last = items.indexOf(item) === items.length - 1;
    return last ? (
      <span>{item.title}</span>
    ) : (
      <Link to={item?.path ?? ""}>{item.title}</Link>
    );
  };
  return (
    <SCCustomBreadCrumb className="custom-breadcrumb">
      <Breadcrumb itemRender={itemRender} items={items} separator={separator} />
    </SCCustomBreadCrumb>
  );
};

export default CustomBreadcrumb;
