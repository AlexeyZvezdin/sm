let mixArrays = [];

let products = [
  'product1',
  'product2',
  'product3',
  'product4',
  'product5',
  'product6',
];
let banners = ['banner1', 'banner2', 'banner3'];

let TwoStage = 2;
let FourStage = 4;

let combineArraysOnConditions = (
  resultingArray,
  firstArray,
  secondArray,
  conditions
) => {
  console.log(conditions); // Работает и это заебись
  const { FourStage } = conditions;
  const { TwoStage } = conditions;
  let currentInput = 0;
  let NextInput = FourStage;
  if (products[currentInput] < products.length) {
  }

  console.log(TwoStage);
  return resultingArray;
};

combineArraysOnConditions(mixArrays, products, banners, {
  TwoStage,
  FourStage,
});
