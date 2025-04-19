// Define the Product interface
export interface Product {
  id: string;
  name: string;
  price: number | null; // null for "Sem preço"
  imageUrl: string;
  slug: string;
  featured?: boolean;
  description: string;
  features?: string[];
}

// Add more types as needed