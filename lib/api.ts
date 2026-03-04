import { Service, Client, CaseStudy, Testimonial, FooterData, Stat } from "@/types";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "";

async function fetchAPI<T>(endpoint: string, revalidate = 60): Promise<T | null> {
  if (!API_BASE_URL) return null;

  try {
    const res = await fetch(`${API_BASE_URL}${endpoint}`, {
      next: { revalidate },
    });
    if (!res.ok) return null;
    const json = await res.json();
    return json.data ?? json;
  } catch {
    return null;
  }
}

export async function getStats() {
  return fetchAPI<Stat[]>("/api/stats");
}

export async function getServices() {
  return fetchAPI<Service[]>("/api/services");
}

export async function getClients() {
  return fetchAPI<Client[]>("/api/clients");
}

export async function getCaseStudies() {
  return fetchAPI<CaseStudy[]>("/api/case-studies");
}

export async function getTestimonials() {
  return fetchAPI<Testimonial[]>("/api/testimonials");
}

export async function getFooterData() {
  return fetchAPI<FooterData>("/api/footer", 300);
}