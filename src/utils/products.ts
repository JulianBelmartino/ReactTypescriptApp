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
      description: 'Incredible Bonsai',
      image: product1,
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'Amazing Bonsai',
      image: product2,
      highlighted: true,
    },
    {
      id: 3,
      name: 'Product 3',
      description: 'Outstanding Bonsai',
      image: product3,
    },
  ];