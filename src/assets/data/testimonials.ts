import image1 from "../images/testimonial-1.png";
import image2 from "../images/testimonial-2.png";

type Testimonial = {
  id: number;
  image: any;
  name: string;
  company: string;
  comment: string;
};

export const testimonials: Testimonial[] = [
  {
    id: 1,
    image: image1,
    name: "Max Saksena",
    company: "Chief",
    comment:
      "I recently used the travel website to plan a surprise honeymoon for my wife, and it was an absolute success! The honeymoon packages offered were romantic and luxurious, and the website's customer support team helped me customize the perfect trip. It was a magical experience from start to finish.",
  },
  {
    id: 2,
    image: image2,
    name: "Sam Drake",
    company: "Journalist",
    comment:
      "As an avid adventure seeker, I rely on the travel website for unique and off-the-beaten-path experiences. Their expertly curated hiking tour in the USA was everything I could have hoped for and more. The scenic trails, knowledgeable guides, and attention to safety made the trip both thrilling and enjoyable.",
  },
];
