import { ReactNode } from "react";

export interface UserDetails {
  displayName: string;
  photoURL: string;
}
export interface Item {
  images: { url: string }[];
  price: { value: number };
  quantity: number;
  articles: { code: number }[];
  code: number;
}
export interface MyState {
  user: UserDetails | null;
  cart: Item[];
}
export interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
}

export interface SliderData {
  total: number;
  results: { urls: { raw: string } }[];
}
export interface CardProps {
  url: string;
  children: ReactNode;
}
export interface ErrorInterface {
  status: number;
  data: { message: string };
}
export interface Category {
  CatName: string;
  tagCodes: string[];
}
