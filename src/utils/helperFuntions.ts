import { ProductCartProps } from "@globalTypes/globalTypes";

export function emptyFunction() {
  return;
}

export function getClassStatusOrder(status: number) {
  switch (status) {
    case 1:
      return { color: "orange", text: "Progress" };
    default:
      return { color: "orange", text: "Progress" };
  }
}

export function convertFormatCurrency(money: number) {
  if (!money) return "0 VND";
  else {
    return money.toLocaleString("it-IT", {
      style: "currency",
      currency: "VND",
    });
  }
}

export function grandTotal(arr: ProductCartProps[]) {
  return arr.reduce((sum, i) => {
    return sum + i.price * (i.quantity || 1);
  }, 0);
}
