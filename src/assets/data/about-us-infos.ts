import image1 from "../images/about-us-1.png";
import image2 from "../images/about-us-2.png";
import image3 from "../images/about-us-3.png";
import image4 from "../images/about-us-4.png";

type AboutUsInfo = {
  id: number;
  image: any;
  title: string;
  description: string;
};

export const aboutUsInfos: AboutUsInfo[] = [
  {
    id: 1,
    image: image1,
    title: "Innovative Tour Plans",
    description:
      "Experience our innovative tour plans designed to take you off the beaten path and uncover hidden gems.",
  },
  {
    id: 2,
    image: image2,
    title: "Expert Travel Guide",
    description:
      "Embark on your journey with confidence, guided by our expert travel guides who share their local expertise and insider knowledge.",
  },
  {
    id: 3,
    image: image3,
    title: "Flexible Payment Policy",
    description:
      "Travel stress-free with our flexible payment policy that accommodates your needs and preferences.",
  },
  {
    id: 4,
    image: image4,
    title: "High Quality Management",
    description:
      "Rest assured that your travel experience is in capable hands with our high-quality management and attention to every detail.",
  },
];
