const someOrder = {
  items: [
    { name: "Dragon food", price: 8, quantity: 8 },
    { name: "Dragon cage (small)", price: 800, quantity: 2 },
    { name: "Shipping", price: 40, shipping: true },
  ],
};

orderTotal = (order) => {
  const cart = order.items
    .filter((item) => {
      return !item.shipping;
    })
    .reduce((prev, cur) => {
      return prev + cur.price * cur.quantity;
    }, 0);

  const shippingCost = order.items.find((item) => {
    return item.shipping;
  });

  return cart > 1000 ? cart : cart + shippingCost;
};

console.log(orderTotal(someOrder));
