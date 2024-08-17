import cruise1 from "../images/cruise-1.jpg";
import cruise2 from "../images/cruise-2.jpg";
import cruise3 from "../images/cruise-3.jpg";
import cruise4 from "../images/cruise-4.jpg";
import cruise5 from "../images/cruise-5.jpg";
import cruise6 from "../images/cruise-6.jpg";
import cruise7 from "../images/cruise-7.jpg";
import cruise8 from "../images/cruise-8.jpg";
import cruise9 from "../images/cruise-9.jpg";

type Cruise = {
  id: number;
  image: any;
  title: string;
  price: number;
};

export const cruises: Cruise[] = [
  {
    id: 1,
    image: cruise1,
    title: "7 Days Bahamas",
    price: 729,
  },
  {
    id: 2,
    image: cruise2,
    title: "14 Days Mediterranean",
    price: 999,
  },
  {
    id: 3,
    image: cruise3,
    title: "5 Days Caribbean",
    price: 360,
  },
  {
    id: 4,
    image: cruise4,
    title: "4 Days Greece",
    price: 236,
  },
  {
    id: 5,
    image: cruise5,
    title: "9 Days Australia",
    price: 990,
  },
  {
    id: 6,
    image: cruise6,
    title: "12 Days Mediterranean",
    price: 560,
  },
  {
    id: 7,
    image: cruise7,
    title: "4 Days Caribbean",
    price: 230,
  },
  {
    id: 8,
    image: cruise8,
    title: "6 Days Caribbean",
    price: 420,
  },
  {
    id: 9,
    image: cruise9,
    title: "10 Days Australia",
    price: 1256,
  },
];
