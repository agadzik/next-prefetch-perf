import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const randomDelayTimeout = request.headers.get("x-vercel-middleware-delay");

  if (randomDelayTimeout) {
    await new Promise((resolve) =>
      setTimeout(resolve, Number(randomDelayTimeout))
    );
  }

  return NextResponse.next();
}
