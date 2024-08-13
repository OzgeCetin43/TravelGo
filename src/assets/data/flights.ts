import flight1 from "../images/flight-1.jpg";
import flight2 from "../images/flight-2.jpg";
import flight3 from "../images/flight-3.jpg";
import flight4 from "../images/flight-4.jpg";
import flight5 from "../images/flight-5.jpg";
import flight6 from "../images/flight-6.jpg";
import flight7 from "../images/flight-7.jpg";
import flight8 from "../images/flight-8.jpg";
import flight9 from "../images/flight-9.jpg";

type Flight = {
  id: number;
  image: any;
  path: string;
  price: number;
};

export const flights: Flight[] = [
  {
    id: 1,
    image: flight1,
    path: "Abudabi - Zurich",
    price: 250,
  },
  {
    id: 2,
    image: flight2,
    path: "Sydney - Berlin",
    price: 849,
  },
  {
    id: 3,
    image: flight3,
    path: "Ankara - Munich",
    price: 1049,
  },
  {
    id: 4,
    image: flight4,
    path: "Zurich - Moscow",
    price: 549,
  },
  {
    id: 5,
    image: flight5,
    path: "Boston - Tbilisi",
    price: 749,
  },
  {
    id: 6,
    image: flight6,
    path: "Amsterdam - Viena",
    price: 179,
  },
  {
    id: 7,
    image: flight7,
    path: "Berlin - Warsaw",
    price: 69,
  },
  {
    id: 8,
    image: flight8,
    path: "New York - Paris",
    price: 539,
  },
  {
    id: 9,
    image: flight9,
    path: "Riga - Prague",
    price: 49,
  },
];
