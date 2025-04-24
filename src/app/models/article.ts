export interface Article {
    id?: number; // Optional for new articles
    title: string;
    content: string;
    image?: string; // Optional image URL
    category: string;
    createdAt?: string; // ISO date string, optional for creation
  }