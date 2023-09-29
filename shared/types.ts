import {IconType} from "react-icons";

export interface Sidebar {}
export interface Button {
  styles?: string;
  children?: React.ReactNode;
  onClick?: () => void;
  icon?: React.JSX.Element;
  title?: string;
  titleStyles?: string;
}
export interface CustomLink {
  type?: string;
  styles?: string;
  link: string;
  icon?: React.JSX.Element;
  title?: string;
  titleStyles?: string;
}
export interface Modal {
  title?: string;
  subtitle?: string;
  children?: React.ReactNode;
}
export interface Card {
  type?: string;
  title: string;
  image: string;
  href: string;
  styles?: string;
  subtitle?: string;
  cardId?: string;
}
export interface Carousell {
  length: number;
  children?: React.ReactNode;
}
