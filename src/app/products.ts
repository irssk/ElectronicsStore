export interface IProduct {
    id: number;
    description: string;
    price: number;
    priceDescription: string;
    image: string;
    quantity: number;
}

export interface IProductCart extends IProduct {
    purchaseQuantity: number
}

export const products: IProduct[] = [
    { id: 1, description: "Gamer mouse", price: 439.00, priceDescription: "At the PIX exhibition", image: "./assets/mouse-3.jpg", quantity: 10 },
    { id: 2, description: "Monitor", price: 1200.50, priceDescription: "At the PIX exhibition", image: "./assets/monitor-1.jpg", quantity: 10 },
    { id: 3, description: "Keyboard", price: 749.99, priceDescription: "At the PIX exhibition", image: "./assets/keyboard-1.jpg", quantity: 10 },
    { id: 4, description: "Headset for FPS players", price: 599.99, priceDescription: "At the PIX exhibition", image: "./assets/headset-2.jpg", quantity: 10 },
    { id: 5, description: "Headset", price: 299.99, priceDescription: "At the PIX exhibition", image: "./assets/headset-1.jpg", quantity: 10 },
    { id: 6, description: "Good headset", price: 399.99, priceDescription: "At the PIX exhibition", image: "./assets/headset-3.jpg", quantity: 10 },
    { id: 7, description: "HD 1TB", price: 499.99, priceDescription: "At the PIX exhibition", image: "./assets/hd.jpg", quantity: 10 },
    { id: 8, description: "Video card kit", price: 18449.99, priceDescription: "At the PIX exhibition", image: "./assets/video-card.jpg", quantity: 10 },
    { id: 9, description: "Ryzen processor", price: 1000, priceDescription: "At the PIX exhibition", image: "./assets/processor.jpg", quantity: 10 },
    { id: 10, description: "Laptop", price: 2500, priceDescription: "At the PIX exhibition", image: "./assets/laptop-1.jpg", quantity: 10 },
    { id: 11, description: "Laptop", price: 4500, priceDescription: "At the PIX exhibition", image: "./assets/laptop-2.jpg", quantity: 10 },
    { id: 12, description: "Cheap mouse", price: 20, priceDescription: "At the PIX exhibition", image: "./assets/mouse-1.png", quantity: 10 },
    { id: 13, description: "Great mouse", price: 200, priceDescription: "At the PIX exhibition", image: "./assets/mouse-2.jpg", quantity: 10 },
    { id: 14, description: "Little mouse", price: 50, priceDescription: "At the PIX exhibition", image: "./assets/mouse-4.jpg", quantity: 10 },
    { id: 15, description: "Good keyboard", price: 159.99, priceDescription: "At the PIX exhibition", image: "./assets/keyboard-2.jpg", quantity: 10 },
]
