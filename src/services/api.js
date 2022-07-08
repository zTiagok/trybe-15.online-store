export async function getCategories() {
  const url = ('https://api.mercadolibre.com/sites/MLB/categories');
  return fetch(url)
    .then((response) => response.json())
    .then((data) => data);
}

export async function getProductsFromQuery(query) {
  const url = (`https://api.mercadolibre.com/sites/MLB/search?q=${query}`);
  return fetch(url)
    .then((response) => response.json())
    .then((data) => data);
}

export async function getProductsFromCategory(category) {
  const url = (`https://api.mercadolibre.com/sites/MLB/search?category=${category}`);
  return fetch(url)
    .then((response) => response.json())
    .then((data) => data);
}

export async function getProductsFromCategoryAndQuery(id, query) {
  const url = (`https://api.mercadolibre.com/sites/MLB/search?category${id}}&q=${query}`);
  return fetch(url)
    .then((response) => response.json())
    .then((data) => data);
}
