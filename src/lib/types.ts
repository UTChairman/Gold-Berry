export interface Product {
    id: string;
    name: string;
    price: number;
    weight: string;
    description: string;
    benefits: string[];
    imageUrl: string;
    features: string[];
}

export interface CartItem {
    product: Product;
    quantity: number;
}
