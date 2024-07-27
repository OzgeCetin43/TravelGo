import image1 from "../images/holiday-package-1.jpg";
import image2 from "../images/holiday-package-2.jpg";
import image3 from "../images/holiday-package-3.jpg";

type HolidayPackage = {
  id: number;
  title: string;
  package: number;
  image: any;
};

export const holidayPackages: HolidayPackage[] = [
  {
    id: 1,
    title: "Heritage",
    package: 20,
    image: image1,
  },
  {
    id: 2,
    title: "Trekking",
    package: 50,
    image: image2,
  },
  {
    id: 3,
    title: "Beach Tour",
    package: 10,
    image: image3,
  },
];
