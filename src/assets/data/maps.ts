import spain from "../images/spain-map.png";
import australia from "../images/australia-map.png";
import peru from "../images/peru-map.png";
import brazil from "../images/brazil-map.png";
import uk from "../images/uk-map.png";
import italy from "../images/italy-map.png";
import india from "../images/india-map.png";
import greece from "../images/greek-map.png";
import france from "../images/france-map.png";

type Map = {
  id: number;
  image: any;
  country: string;
  title: string;
};

export const maps: Map[] = [
  {
    id: 1,
    image: spain,
    country: "Spain",
    title: "Fishing / Overnight",
  },
  {
    id: 2,
    image: australia,
    country: "Australia",
    title: "Camping / Restaurants",
  },
  {
    id: 3,
    image: peru,
    country: "Peru",
    title: "Low Budget",
  },
  {
    id: 4,
    image: brazil,
    country: "Brazil",
    title: "Beaches / Photography",
  },
  {
    id: 5,
    image: uk,
    country: "United Kingdom",
    title: "Flights / Guides",
  },
  {
    id: 6,
    image: italy,
    country: "Italy",
    title: "Flights / Shopping",
  },
  {
    id: 7,
    image: india,
    country: "India",
    title: "Beaches / Flights / Guides",
  },
  {
    id: 8,
    image: greece,
    country: "Greece",
    title: "Flights / Guides",
  },
  {
    id: 9,
    image: france,
    country: "France",
    title: "Flights / Guides",
  },
];
