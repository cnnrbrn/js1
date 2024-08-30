const CART_KEY = "cart";

function saveToCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

export function getCart() {
  return JSON.parse(localStorage.getItem(CART_KEY)) || [];
}

export function isIdInCart(id) {
  console.log(typeof id);

  const cart = getCart();
  return cart.some((item) => Number(item.id) === Number(id));
}

export function addToCart(id, title) {
  const newItem = { id: id, title: title };

  const cart = getCart();
  cart.push(newItem);
  saveToCart(cart);
}

export function removeFromCart(id) {
  const cart = getCart();
  const newCart = cart.filter((item) => item.id !== id);
  saveToCart(newCart);
}

export function clearCart() {
  // saveToCart([]);
  localStorage.removeItem(CART_KEY);
}

export function getTotalPrice(cart) {
  const total = cart.reduce(
    (accumulator, currentValue) => accumulator + currentValue.price,
    0
  );

  return total;
}
