export interface Stat {
  id: string;
  value: string;
  label: string;
}

export interface Service {
  id: string;
  number: string;
  title: string;
  description: string;
  image: string;
}

export interface Client {
  id: string;
  name: string;
  logo: string;
  row: 1 | 2;
}

export interface CaseStudy {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  client: string;
  link: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  image: string;
}

export interface FooterData {
  links: { label: string; href: string }[];
  socialLinks: { label: string; href: string }[];
  email: string;
  phone: string;
}