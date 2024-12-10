import { plainToInstance } from "class-transformer";
import "reflect-metadata";
import { Product } from "./product.model";
import { validate } from "class-validator";

const products = [
  { title: "A Carpet", price: 29.99 },
  { title: "A Book", price: 10.99 },
];

const loadedProducts = plainToInstance(Product, products);

for (const product of loadedProducts) {
  console.log(product.getInformation());
}

const newProd = new Product("", -5.99);
validate(newProd).then((errors) => {
  if (errors.length > 0) {
    console.log("VALIDATION ERRORS!");
    console.log(errors);
  } else {
    console.log(newProd.getInformation());
  }
});
