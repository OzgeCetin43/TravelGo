import { TbAirConditioningDisabled } from "react-icons/tb";
import { FaWifi, FaTree, FaSwimmingPool, FaRegHeart } from "react-icons/fa";
import { MdFastfood } from "react-icons/md";

type Facility = {
  id: number;
  icon: any;
  title: string;
  description: string;
};

export const facilities: Facility[] = [
  {
    id: 1,
    icon: TbAirConditioningDisabled,
    title: "Full Air Conditioned",
    description:
      "The Ritz London provides air-conditioned rooms and public areas to ensure a comfortable stay, especially during warm London summers.",
  },
  {
    id: 2,
    icon: FaWifi,
    title: "Free Wifi Zone",
    description:
      "Complimentary high-speed Wi-Fi is available throughout the hotel, allowing guests to stay connected during their visit.",
  },
  {
    id: 3,
    icon: FaTree,
    title: "Out Door Area",
    description:
      "The hotel boasts a picturesque outdoor terrace where guests can relax and enjoy the fresh air in a tranquil setting.",
  },
  {
    id: 4,
    icon: MdFastfood,
    title: "Food & Drinks",
    description:
      "The Ritz offers a range of dining options, from the opulent Ritz Restaurant to the elegant Palm Court, famous for its afternoon tea service, making every meal a memorable experience.",
  },
  {
    id: 5,
    icon: FaSwimmingPool,
    title: "Swimming Pool",
    description:
      "The Ritz London features a beautiful indoor swimming pool where guests can unwind and rejuvenate.",
  },
  {
    id: 6,
    icon: FaRegHeart,
    title: "Spa and Gym",
    description:
      "The hotel's luxurious spa and fitness center provide guests with the opportunity to indulge in relaxation and maintain their fitness routines during their stay.",
  },
];
