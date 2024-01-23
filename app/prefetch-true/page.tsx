import Link from "next/link";

export default function PrefetchPage() {
  // generate 100 random slug strings, each 5 characters long
  const slugs = Array.from({ length: 100 }, () =>
    Math.random().toString(36).substring(2, 7)
  );

  return (
    <ul className="flex flex-row flex-wrap">
      {slugs.map((slug) => (
        <li className="basis-1/4" key={slug}>
          <Link href={`/prefetch-true/${slug}`} prefetch={true}>
            {slug}
          </Link>
        </li>
      ))}
    </ul>
  );
}
