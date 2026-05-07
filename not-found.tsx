import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto w-full max-w-3xl px-4 py-16">
      <div className="rounded-3xl border border-black/10 bg-white p-8 text-center dark:border-white/15 dark:bg-black/20">
        <div className="text-sm font-semibold">Page not found</div>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight">
          We couldn’t find that page.
        </h1>
        <p className="mt-3 text-sm text-black/70 dark:text-white/70">
          Try browsing the fleet or request a booking.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/fleet"
            className="inline-flex h-11 items-center justify-center rounded-full bg-black px-5 text-sm font-medium text-white hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90"
          >
            Browse fleet
          </Link>
          <Link
            href="/"
            className="inline-flex h-11 items-center justify-center rounded-full border border-black/10 px-5 text-sm font-medium text-black hover:bg-black/5 dark:border-white/15 dark:text-white dark:hover:bg-white/10"
          >
            Go home
          </Link>
        </div>
      </div>
    </main>
  );
}

