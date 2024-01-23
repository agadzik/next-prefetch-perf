interface PageProps {
  params: {
    slug: string;
  };
}

export async function DynamicPage({ params }: PageProps) {
  // simulate a slow page load
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return (
    <div className="min-h-screen flex items-center justify-center">
      {params.slug}
    </div>
  );
}
