import { Metadata } from "next";
import WorkDetailModule from "@/components/wrappers/WorkDetailModule";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  return {
    title: `Project: ${slug.replace("-", " ")}`,
    description: `Detailed view of the ${slug.replace(
      "-",
      " "
    )} project showcasing development process and technologies used.`,
    alternates: {
      canonical: `/work/${slug}`,
    },
    openGraph: {
      title: `Project: ${slug.replace("-", " ")} | Professional Portfolio`,
      description: `Detailed view of the ${slug.replace(
        "-",
        " "
      )} project showcasing development process and technologies used.`,
      url: `/work/${slug}`,
    },
    twitter: {
      title: `Project: ${slug.replace("-", " ")} | Professional Portfolio`,
      description: `Detailed view of the ${slug.replace(
        "-",
        " "
      )} project showcasing development process and technologies used.`,
    },
  };
}

export default async function WorkDetailPage({ params }: Props) {
  const { slug } = await params;
  return <WorkDetailModule slug={slug} />;
}
