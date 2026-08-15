import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="container-page flex min-h-[65vh] flex-col items-center justify-center py-20 text-center">
      <p className="eyebrow mb-4 text-pearl/40">404</p>
      <h1 className="display-lg">This page didn&rsquo;t survive the cut.</h1>
      <p className="mt-5 max-w-md text-base text-pearl/60">
        Whatever you were looking for has been reframed. The instruments,
        however, are exactly where they should be.
      </p>
      <div className="mt-9 flex gap-3">
        <Button href="/">Go home</Button>
        <Button href="/store" variant="ghost">
          Visit the store
        </Button>
      </div>
    </div>
  );
}
