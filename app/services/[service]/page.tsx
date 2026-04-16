import Construction from "@/components/information/Construction";
import Maintenance from "@/components/information/Maintenance";
import Security from "@/components/information/Security";
import Transport from "@/components/information/Transport";
import { notFound } from "next/navigation";
import ServicePageClient from "./ServicePageClient";
import Technology from "@/components/information/Technolofy";

type Props = {
  params: Promise<{ service: string }>;
};

export default async function ServicePage({ params }: Props) {
  const { service } = await params;

  const serviceMap: Record<string, React.ReactNode> = {
    construction: <Construction />,
    maintenance: <Maintenance />,
    transport: <Transport />,
    security: <Security />,
    technology: <Technology />,
  };

  const content = serviceMap[service];

  if (!content) return notFound();

  return <ServicePageClient content={content} />;
}