"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { ComponentProps } from "react";

interface HoverLinkProps extends ComponentProps<typeof Link> {}
export function HoverLink(props: HoverLinkProps) {
  const router = useRouter();

  return (
    <Link
      {...props}
      prefetch={false}
      onPointerEnter={() => {
        router.prefetch(
          typeof props.href === "string" ? props.href : props.href.pathname!
        );
      }}
    />
  );
}
