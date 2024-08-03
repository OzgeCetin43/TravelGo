import spain from "../images/gallery-spain.png";
import thailand from "../images/gallery-thailand.png";
import africa from "../images/gallery-africa.png";
import australia from "../images/gallery-australia.png";
import switzerland from "../images/gallery-switzerland.png";

type ExoticPlace = {
  id: number;
  image: any;
  country: string;
  tag?: string;
};

export const exoticPlaces: ExoticPlace[] = [
  {
    id: 1,
    image: spain,
    country: "Spain",
  },
  {
    id: 2,
    image: thailand,
    country: "Tahiland",
    tag: "Wildlife",
  },
  {
    id: 3,
    image: africa,
    country: "Africa",
  },
  {
    id: 4,
    image: australia,
    country: "Australia",
  },
  {
    id: 5,
    image: switzerland,
    country: "Switzerland",
    tag: "Adventure",
  },
];
