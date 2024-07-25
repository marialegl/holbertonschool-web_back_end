export default function groceriesList() {
  const listMarket = [
    { name: 'Apples', quantity: 10 },
    { name: 'Tomatoes', quantity: 10 },
    { name: 'Pasta', quantity: 1 },
    { name: 'Rice', quantity: 1 },
    { name: 'Banana', quantity: 5 },
  ];

  const listGrocery = new Map();
  listMarket.forEach((item) => listGrocery.set(item.name, item.quantity));
  return listGrocery;
}
