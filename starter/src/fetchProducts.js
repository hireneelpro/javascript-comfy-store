const fetchProducts = async (url) => {
  // const response =  await fetch(url)
  // const data = await response.json()

  const data = await (await fetch(url)).json();
  console.log(data);
  return data;
};

export default fetchProducts;
