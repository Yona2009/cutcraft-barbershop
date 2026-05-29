export type Service = {
  id: number;
  title: string;
  description: string;
  price: string;
  duration: string;
  image: string;
};

export type Barber = {
  id: number;
  name: string;
  role: string;
  experience: string;
  image: string;
};

export type Testimonial = {
  id: number;
  name: string;
  text: string;
  rating: string;
};