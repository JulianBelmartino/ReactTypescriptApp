import product1 from '../assets/images/bonsai1.png';
import product2 from '../assets/images/bonsai2.jpg';
import product3 from '../assets/images/bonsai3.jpg';

export interface Product {
    id: number;
    name: string;
    description: string;
    image: string;
    highlighted?: boolean;
  }
  
  export const products: Product[] = [
    {
      id: 1,
      name: 'Product 1',
      description: 'Description of Product 1',
      image: product1,
      highlighted: true,
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'Description of Product 2',
      image: product2,
    },
    {
      id: 3,
      name: 'Product 3',
      description: 'Description of Product 3',
      image: product3,
    },
  ];