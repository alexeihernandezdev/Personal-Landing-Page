import Services from "@/components/pages/services/Services";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description: "Professional technology services",
};

export default function ServicesPage() {
  return <Services />;
}
