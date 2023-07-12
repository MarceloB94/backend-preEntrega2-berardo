const ProductManager = require("./ProductManager.js");
let productManager = new ProductManager();
console.log(productManager);

let persistirProduct = async () => {
  let product = await productManager.addProduct(
    "producto prueba",
    "este es un producto de prueba",
    200,
    "sin imagen",
    "CA45CO",
    25
  );

  let product2 = await productManager.addProduct(
    "Producto 2",
    "Otro de prueba",
    300,
    "Sin imagen",
    50
  );

  let products = await productManager.getProducts();
  console.log(`Productos encontrados en Product Manager: ${products.length}`);
  console.log(products);

  let foundProduct = await productManager.getProductById("1");
  console.log("Producto encontrado por ID:");
  console.log(foundProduct);

  await productManager.updateProduct("3", {
    price: 2050,
    description: "Otro Producto ",
  });

  await productManager.deleteProduct("1");
};

persistirProduct();
