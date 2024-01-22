import { Product, taxCalc } from "./06-function-destructuring";

const shoppingCart: Product[] = [
	{ description: "Nokia", price: 200 },
	{ description: "Iphone", price: 250 },
];

const [total, tax] = taxCalc({products: shoppingCart,tax:  0.15});

console.log(`Total: ${total}`)
console.log(`Taxed: ${tax}`);