import {
  GiDeerHead,
  GiParachute,
  GiWildfires,
  GiHangGlider,
} from "react-icons/gi";

type Tour = {
  id: number;
  icon: any;
  type: string;
};

export const bannerTours: Tour[] = [
  {
    id: 1,
    icon: GiDeerHead,
    type: "Wildlife",
  },
  {
    id: 2,
    icon: GiParachute,
    type: "Paragdliding",
  },
  {
    id: 3,
    icon: GiWildfires,
    type: "Adventure",
  },
  {
    id: 4,
    icon: GiHangGlider,
    type: "Hang Gliding",
  },
];
