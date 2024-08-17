import post1 from "../images/post-1.jpg";
import post2 from "../images/post-2.jpg";
import post3 from "../images/post-3.jpg";
import post4 from "../images/post-4.jpg";
import post5 from "../images/post-5.jpg";
import post6 from "../images/post-6.jpg";
import post7 from "../images/post-7.jpg";
import post8 from "../images/post-8.jpg";

type Post = {
  id: number;
  image: any;
  title: string;
  date: string;
};

export const posts: Post[] = [
  {
    id: 1,
    image: post1,
    title: "Salalah, A Tropical Paradise in Oman",
    date: "August 3, 2024",
  },
  {
    id: 2,
    image: post2,
    title: "Exploring the New York Architectural Marvels",
    date: "July 28, 2024",
  },
  {
    id: 3,
    image: post3,
    title: "The Vibrant Harbor City Down Under",
    date: "July 24, 2023",
  },
  {
    id: 4,
    image: post4,
    title: "India's Majestic Monument of Love",
    date: "July 28, 2023",
  },
  {
    id: 5,
    image: post5,
    title: "Morocco Beach Sun, Sand, and Serenity",
    date: "July 22, 2023",
  },
  {
    id: 6,
    image: post6,
    title: "Lakeside Tranquility and Italian Charm",
    date: "June 30, 2023",
  },
  {
    id: 7,
    image: post7,
    title: "A Fusion of Cultures and Wonders Await!",
    date: "May 26, 2023",
  },
  {
    id: 8,
    image: post8,
    title: "Discovering Historic Landmarks in the UK",
    date: "May 18, 2023",
  },
];
