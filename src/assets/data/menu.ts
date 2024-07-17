type Menu = {
  id: number;
  path: string;
  label: string;
  subMenu: Menu[];
};

export const menu: Menu[] = [
  {
    id: 1,
    path: "/",
    label: "Home",
    subMenu: [],
  },
  {
    id: 2,
    path: "/about-us",
    label: "About Us",
    subMenu: [],
  },
  {
    id: 3,
    path: "/gallery",
    label: "Gallery",
    subMenu: [],
  },
  {
    id: 4,
    path: "/",
    label: "Pages",
    subMenu: [
      {
        id: 5,
        path: "/flights",
        label: "Flights",
        subMenu: [],
      },
      {
        id: 6,
        path: "/hotels",
        label: "Hotels",
        subMenu: [],
      },
      {
        id: 7,
        path: "/rent-a-car",
        label: "Rent a Car",
        subMenu: [],
      },
      {
        id: 8,
        path: "/cruises",
        label: "Cruises",
        subMenu: [],
      },
    ],
  },
  {
    id: 9,
    path: "/blogs",
    label: "Blogs",
    subMenu: [],
  },
  {
    id: 10,
    path: "/contact",
    label: "Contact",
    subMenu: [],
  },
];
