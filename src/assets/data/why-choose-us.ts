import icon1 from "../images/why-choose-us-1.png";
import icon2 from "../images/why-choose-us-2.png";
import icon3 from "../images/why-choose-us-3.png";

type ChooseUs = {
  id: number;
  icon: any;
  title: string;
  description: string;
};

export const whyChooseUs: ChooseUs[] = [
  {
    id: 1,
    icon: icon1,
    title: "Our Mission",
    description:
      "To inspire and empower travelers to explore the world with wonder, creating unforgettable experiences.",
  },
  {
    id: 2,
    icon: icon2,
    title: "Destination Insights",
    description:
      "Gain valuable insights into captivating destinations through our comprehensive guides and expert recommendations.",
  },
  {
    id: 3,
    icon: icon3,
    title: "Tailored Travel Planning",
    description:
      "Our website offers personalized travel planning services tailored to your preferences and interests.",
  },
];
