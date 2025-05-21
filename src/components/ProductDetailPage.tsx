import React from 'react';
import { Card, Image, Text } from 'shadcn/ui';
import 'tailwindcss/tailwind.css';

interface ProductDetailProps {
  product: {
    id: string;
    name: string;
    description: string;
    imageUrl: string;
  };
}

const ProductDetailPage: React.FC<ProductDetailProps> = ({ product }) => {
  return (
    <Card className="max-w-md mx-auto my-8 p-4 space-y-4">
      <Image src={product.imageUrl} alt={product.name} className="w-full" />
      <Text variant="heading" className="text-lg">
        {product.name}
      </Text>
      <Text>{product.description}</Text>
    </Card>
  );
};

export default ProductDetailPage;