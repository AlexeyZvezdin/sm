export function category(category) {
  return `/menu/${category.path}`;
}

export function product(product) {
  // console.log("-----")
  // console.log(product)
  // console.log("-----")
  return `/products/${product.url}`;
}

export function productById(product) {
  return `/products/${product.id}`;
}

export function productByUrl(product) {
  return `/products/${product.url}`;
}

export function productByCategoryAndUrl(category, product) {
  return `/menu/${category}/${product.url}`;
}

export function cart() {
  return '/cart';
}

export function cartOrder() {
  return '/cart/order';
}

export function cartOrderSuccess(orderId) {
  return `/cart/order/success/${orderId}`;
}

export function payment() {
  return '/payment';
}

export function vacancy() {
  return '/vacancy';
}

export function paymentStatus(status, orderId) {
  return `/payment/${status}/${orderId}`;
}

export function delivery() {
  return '/delivery';
}

export function bonuses() {
  return '/bonus';
}

export function campaign() {
  return '/actions';
}

export function profile(tab) {
  // TODO
  return `/profile/${tab}`;
}

export function profileHistory(orderId) {
  // TODO
  return `/profile/history/${orderId}`;
}

export const about = () => `/about`;

//TODO /campaign/
