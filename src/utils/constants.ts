export const ORDER_ASCEND = "ascend";
export const ORDER_DESCEND = "descend";
export const PATH_API: string =
  process.env.REACT_APP_API_BASE_URL || "http://localhost:8000/api/v1";
export const PATH_API_TEST = "http://localhost:8000/api/v1";

export const fakeDataCarts = [
  {
    id: 1,
    name: "Dress",
    category: "Color",
    variant: "Red",
    quality: 3,
    price: 200000,
    avatar: "https://picsum.photos/200/300/?blur=2",
  },
  {
    id: 2,
    name: "Dress",
    category: "Color",
    variant: "Red",
    quality: 3,
    price: 200000,
    avatar: "https://picsum.photos/200/300/?blur=2",
  },
  {
    id: 3,
    name: "Dress",
    category: "Color",
    variant: "Red",
    quality: 3,
    price: 200000,
    avatar: "https://picsum.photos/200/300/?blur=2",
  },
];
