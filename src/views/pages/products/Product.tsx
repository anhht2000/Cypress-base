import { Navigate } from "react-router-dom";

import { usePermission } from "hooks/usePermission";
import Slot from "@components/slot/Slot";
import { Button } from "antd";

export default function Product() {
  const [isChecked] = usePermission("list-product");
  if (!isChecked) {
    return <Navigate to="/unauthorized" />;
  }

  if (isChecked) {
    return (
      <div>
        <h1>Product</h1>
        <Slot>
          <Slot.Header>Header</Slot.Header>
          <Slot.Handle>
            <Button>123123123</Button>
          </Slot.Handle>
          <Slot.Content>Content</Slot.Content>
          <Slot.Footer>Footer</Slot.Footer>
        </Slot>
      </div>
    );
  }

  return <></>;
}
