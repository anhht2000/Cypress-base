import { useGetProductsQuery } from "@apps/services/productService";
import Slot from "@components/slot/Slot";

export default function Product() {
  const { data } = useGetProductsQuery(undefined);
  if (!data) return <></>;
  return (
    <Slot>
      <Slot.Header>Products</Slot.Header>
      <Slot.Content>
        {data.data.map((d) => (
          <p key={`product--${d.id}`}>{d.name}</p>
        ))}
      </Slot.Content>
    </Slot>
  );
}
