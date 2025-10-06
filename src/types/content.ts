// Shared content types used across components

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  images: string[];
  client: string;
  year: string;
  scope: string[];
}

export interface ServiceCard {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
}


