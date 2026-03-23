import { useEffect, useState } from 'react';
import z from 'zod';
import { ProductSchema } from '../schemas/products';
import type { Product } from '../types';

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>();
  const [errors, setErrors] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products');
        const d = await response.json();

        // const { success, data, error } = ProductSchemaArray.safeParse(d.products);

        const fetchedProducts = [];
        const productErrors = [];

        for (const product of d.products) {
          const { success, data, error } = ProductSchema.safeParse(product);

          if (success) {
            fetchedProducts.push(data);
          } else {
            productErrors.push(z.prettifyError(error));
          }
        }

        setProducts(fetchedProducts);
        setErrors(productErrors);
      } catch (error) {
        if (error instanceof Error) {
          setErrors([error.message]);
        }
      }
    };

    fetchData();
  }, []);

  console.log('Products: ', products);
  console.log('Errors: ', errors);

  return null;
};

export default ProductList;
