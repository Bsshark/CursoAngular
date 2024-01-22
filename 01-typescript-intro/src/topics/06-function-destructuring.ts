export interface Product {
	description: string;
	price: number;
}

const phone: Product = {
	description : "Nokia A1",
	price: 200,
};

const tablet: Product = {
	description: "iPad Air",
	price: 300,
};

interface taxCalculationOptions {
    tax: number,
    products: Product[]
}

export const taxCalc = (options: taxCalculationOptions): number[] => {
    const {tax, products} = options;
    let total = 0;

    products.map(({price}) => {
        total += price;
    })

    return [total, total * tax];
}


const shoppingCart = [phone, tablet];
const tax = 0.15;


const [total, totalTax] = taxCalc({products: shoppingCart, tax});

console.log(`Total: ${total} Taxed: ${totalTax}`)



