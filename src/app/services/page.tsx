import ServicesGrid from "@/components/sections/ServicesGrid";
import { metadata } from "../layout";

export const metadata = {
  ...metadata,
  title: "Services | Radiance Med Spa",
  description: "Explore our range of aesthetic treatments and services.",
};

export default function Services() {
  return (
    <>
      <ServicesGrid />
    </>
  );
}