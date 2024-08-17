import blog1 from "../images/blog-1.jpg";
import blog2 from "../images/blog-2.jpg";
import blog3 from "../images/blog-3.jpg";
import blog4 from "../images/blog-4.jpg";
import blog5 from "../images/blog-5.jpg";

type Blog = {
  id: number;
  image: any;
  type: string;
  author: string;
  date: string;
  title: string;
  description: string;
};

export const blogs: Blog[] = [
  {
    id: 1,
    image: blog1,
    type: "Adventure",
    author: "Casey Writer",
    date: "July 17, 2023",
    title: "Soaring High: Riding Balloons in Turkey",
    description:
      "Discover the magic of Cappadocia, Turkey, from a bird's-eye view. Experience the breathtaking landscapes and ancient rock formations as you float gently above in a hot air balloon. Our guide shares tips for the best time to fly and what to expect during this unforgettable adventure ...",
  },
  {
    id: 2,
    image: blog2,
    type: "Romance",
    author: "Liam Nilson",
    date: "July 20, 2023",
    title: "Lake Adventure in Canada, Exploring the Great Outdoors",
    description:
      "Immerse yourself in the tranquility of Canada's pristine lakes and wilderness. From kayaking on the emerald waters to fishing for native species, this blog post is a guide to experiencing the ultimate lake adventure. Unearth the hidden gems and serenity that await you in Canada's vast natural playground ...",
  },
  {
    id: 3,
    image: blog3,
    type: "Relaxation",
    author: "Stacey Lang",
    date: "May 1, 2023",
    title: "Beachfront Bliss, Exploring Thailand's Coastal Gems",
    description:
      "Thailand's coastal beauty beckons with its idyllic beaches and crystal-clear waters. This post delves into the top beachfront destinations, from the lively Patong Beach to the serene Railay Beach. Get insider tips on water sports, local cuisine, and the vibrant beach culture that will leave you yearning for more ...",
  },
  {
    id: 4,
    image: blog4,
    type: "Hiking",
    author: "Rick Standford",
    date: "June 22, 2022",
    title: "Hiking in the USA, Exploring Nature's Spectacular Trails",
    description:
      "Lace up your hiking boots and set out to conquer some of the most breathtaking trails in the USA. From the towering peaks of the Rocky Mountains to the dramatic canyons of the Grand Canyon, this blog post is a hiker's guide to unforgettable adventures. Discover the best trails, tips for preparation, and the awe-inspiring landscapes that await you ...",
  },
  {
    id: 5,
    image: blog5,
    type: "Adventure",
    author: "Stacey Writer",
    date: "April 25, 2022",
    title: "Beach Paradise in the Philippines, Island-Hopping Adventure",
    description:
      "Embark on a tropical journey through the Philippines' paradisiacal islands. From the pristine shores of Boracay to the secluded beauty of Palawan's lagoons, this post unveils the best beach destinations in the Philippines. Prepare to be enchanted by the diverse marine life, lush landscapes, and the warm hospitality of the Filipino ...",
  },
];
