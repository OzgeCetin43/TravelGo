import image1 from "../images/service-1.png";
import image2 from "../images/service-2.png";
import image3 from "../images/service-3.png";

type Service = {
  id: number;
  image: any;
  title: string;
  description: string;
};

export const services: Service[] = [
  {
    id: 1,
    image: image1,
    title: "Most Popular Destinations",
    description:
      "Discover the world's most sought-after destinations, from breathtaking wonders to vibrant cityscapes. Unveil iconic landmarks, immerse in diverse cultures, and create cherished memories on your journey of a lifetime.",
  },
  {
    id: 2,
    image: image2,
    title: "Budget Friendly Packages",
    description:
      "Travel doesn't have to break the bank! Explore our curated selection of budget-friendly packages, where you can experience incredible adventures without compromising on quality. Embrace wanderlust without the financial worry.",
  },
  {
    id: 3,
    image: image3,
    title: "Satisfaction Guaranteed",
    description:
      "Your satisfaction is our top priority. With meticulous planning and personalized service, we ensure your travel experiences exceed expectations. Book with confidence, knowing that your journey will be nothing short of exceptional.",
  },
];
