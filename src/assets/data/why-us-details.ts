import image1 from "../images/why-us-detail-1.png";
import image2 from "../images/why-us-detail-2.png";
import image3 from "../images/why-us-detail-3.png";
import image4 from "../images/why-us-detail-4.png";

type WhyUsDetail = {
  id: number;
  image: any;
  title: string;
  description: string;
};

export const whyUsDetails: WhyUsDetail[] = [
  {
    id: 1,
    image: image1,
    title: "Expert Travel Agent",
    description:
      "Trust in the guidance of our seasoned travel agents, to curate your perfect journey.",
  },
  {
    id: 2,
    image: image2,
    title: "Easy Booking Options",
    description:
      "With our user-friendly booking platform, planning your dream vacation becomes a breeze.",
  },
  {
    id: 3,
    image: image3,
    title: "World Class Service",
    description:
      "Immerse yourself in a world of unparalleled service, for unforgettable travel experience.",
  },
  {
    id: 4,
    image: image4,
    title: "Total Secured Travel",
    description:
      "Rest assured as we prioritize your safety and peace of mind, your travel is fully protected.",
  },
];
