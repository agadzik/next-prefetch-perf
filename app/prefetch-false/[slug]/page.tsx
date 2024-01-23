interface PageProps {
  params: {
    slug: string;
  };
}

export const dynamic = "force-dynamic";

export default async function DynamicPage({ params }: PageProps) {
  // simulate a slow page load
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return <div>{params.slug}</div>;
}
