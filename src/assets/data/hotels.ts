import hotel1 from "../images/hotel-1.jpg";
import hotel2 from "../images/hotel-2.jpg";
import hotel3 from "../images/hotel-3.jpg";
import hotel4 from "../images/hotel-4.jpg";
import hotel5 from "../images/hotel-5.jpg";
import hotel6 from "../images/hotel-6.jpg";
import hotel7 from "../images/hotel-7.jpg";
import hotel8 from "../images/hotel-8.jpg";
import hotel9 from "../images/hotel-9.jpg";

type Hotel = {
  id: number;
  image: any;
  tag?: string;
  location: string;
  name: string;
  star: number;
  review: number;
  price: number;
};

export const hotels: Hotel[] = [
  {
    id: 1,
    image: hotel1,
    tag: "featured",
    location: "İstanbul",
    name: "Istanbul Beach Hotel",
    star: 4.8,
    review: 4500,
    price: 550,
  },
  {
    id: 2,
    image: hotel2,
    tag: "top-rated",
    location: "Maldives",
    name: "Maldives Beach Hotel",
    star: 4.9,
    review: 7900,
    price: 650,
  },
  {
    id: 3,
    image: hotel3,
    location: "Palawan",
    name: "Palawan Beachfront Hotel",
    star: 4.5,
    review: 6591,
    price: 245,
  },
  {
    id: 4,
    image: hotel4,
    tag: "top-rated",
    location: "Punta Cana",
    name: "Punta Cana Hotel",
    star: 4.6,
    review: 8711,
    price: 439,
  },
  {
    id: 5,
    image: hotel5,
    location: "Las Vegas",
    name: "The Bellagio",
    star: 4.7,
    review: 4780,
    price: 345,
  },
  {
    id: 6,
    image: hotel6,
    tag: "featured",
    location: "İstanbul",
    name: "İstanbul Mom Hotel",
    star: 4.6,
    review: 3210,
    price: 480,
  },
  {
    id: 7,
    image: hotel7,
    tag: "top-rated",
    location: "Phuket",
    name: "Avista Hideway Hotel",
    star: 4.8,
    review: 2389,
    price: 530,
  },
  {
    id: 8,
    image: hotel8,
    location: "Vietnam",
    name: "The Anam Hotel",
    star: 4.8,
    review: 4900,
    price: 459,
  },
  {
    id: 9,
    image: hotel9,
    tag: "featured",
    location: "Bali",
    name: "One Eighty Hotel",
    star: 4.7,
    review: 6233,
    price: 450,
  },
];
