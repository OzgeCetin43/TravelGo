import image1 from "../images/sponsor-1.png";
import image2 from "../images/sponsor-2.png";
import image3 from "../images/sponsor-3.png";
import image4 from "../images/sponsor-4.png";
import image5 from "../images/sponsor-5.png";
import image6 from "../images/sponsor-6.png";

type Sponsor = {
  id: number;
  image: any;
};

export const sponsors: Sponsor[] = [
  {
    id: 1,
    image: image1,
  },
  {
    id: 2,
    image: image2,
  },
  {
    id: 3,
    image: image3,
  },
  {
    id: 4,
    image: image4,
  },
  {
    id: 5,
    image: image5,
  },
  {
    id: 6,
    image: image6,
  },
];
