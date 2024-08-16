import car1 from "../images/car-1.jpg";
import car2 from "../images/car-2.jpg";
import car3 from "../images/car-3.jpg";
import car4 from "../images/car-4.jpg";
import car5 from "../images/car-5.jpg";
import car6 from "../images/car-6.jpg";
import car7 from "../images/car-7.jpg";
import car8 from "../images/car-8.jpg";
import car9 from "../images/car-9.jpg";

type Car = {
  id: number;
  image: any;
  model: string;
  door: number;
  transmissionType: string;
  passenger: number;
  price: number;
};

export const cars: Car[] = [
  {
    id: 1,
    image: car1,
    model: "Smart Forfour 1.0",
    door: 5,
    transmissionType: "Manual",
    passenger: 5,
    price: 24,
  },
  {
    id: 2,
    image: car2,
    model: "Fiat 500 1.2",
    door: 3,
    transmissionType: "Manual",
    passenger: 4,
    price: 25,
  },
  {
    id: 3,
    image: car3,
    model: "Fiat Panda 1.2",
    door: 5,
    transmissionType: "Manual",
    passenger: 4,
    price: 26,
  },
  {
    id: 4,
    image: car4,
    model: "Mercedes Benz C200",
    door: 4,
    transmissionType: "Automatic",
    passenger: 5,
    price: 68,
  },
  {
    id: 5,
    image: car5,
    model: "Mercedes Benz E200",
    door: 4,
    transmissionType: "Automatic",
    passenger: 5,
    price: 5,
  },
  {
    id: 6,
    image: car6,
    model: "Audi A4 2.0",
    door: 4,
    transmissionType: "Automatic",
    passenger: 5,
    price: 75,
  },
  {
    id: 7,
    image: car7,
    model: "Peugeout 2008 GPS",
    door: 4,
    transmissionType: "Manual",
    passenger: 5,
    price: 58,
  },
  {
    id: 8,
    image: car8,
    model: "Gm Vivaro 2.1",
    door: 4,
    transmissionType: "Automatic",
    passenger: 10,
    price: 90,
  },
  {
    id: 9,
    image: car9,
    model: "Mercedes Benz V 2.1",
    door: 4,
    transmissionType: "Automatic",
    passenger: 12,
    price: 100,
  },
];
