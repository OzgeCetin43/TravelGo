import image1 from "../images/famous-place-1.png";
import image2 from "../images/famous-place-2.png";
import image3 from "../images/famous-place-3.png";

type Place = {
  id: number;
  image: any;
  star: number;
  rate: number;
  emoji: string;
  title: string;
  perPerson: number;
  days: number;
  people: number;
  location: string;
};

export const famousPlaces: Place[] = [
  {
    id: 1,
    image: image1,
    star: 4.0,
    rate: 23,
    emoji: "😉",
    title: "Lakshadweep",
    perPerson: 45,
    days: 4,
    people: 10,
    location: "India",
  },
  {
    id: 2,
    image: image2,
    star: 4.5,
    rate: 32,
    emoji: "😜",
    title: "Kaziranga",
    perPerson: 23,
    days: 6,
    people: 13,
    location: "India",
  },
  {
    id: 3,
    image: image3,
    star: 4.7,
    rate: 48,
    emoji: "😍",
    title: "Sun Temple",
    perPerson: 19,
    days: 4,
    people: 18,
    location: "India",
  },
];
