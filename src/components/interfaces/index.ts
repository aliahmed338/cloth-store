import { ReactNode } from "react";

export interface InavItems {
  text: string;
  to: string;
}

export interface Icategory {
  _id: string;
  name: string;
}

export interface Iproducts {
  _id: string;
  title: string;
  description: string;
  price: number;
  ratingsAverage: number;
  imageCover: string;
  quantity: number;
}

export interface IFormRegister {
  name: string;
  email: string;
  password: string;
  rePassword: string;
  phone: string;
}

export interface IcategoryBox {
  text: string;
  icon: ReactNode;
}

export interface IcircleInfo {
  icon: ReactNode;
  mainTitle: string;
  secondTitle: string;
}

export interface IEmployeeInfo {
  image: string;
  name: string;
  job: string;
  icons: ReactNode;
}
