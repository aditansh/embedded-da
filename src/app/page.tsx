import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex min-h-[90vh] flex-col items-center justify-center gap-8 bg-background p-[5%] md:flex-row">
      <Button
        variant="outline"
        className="h-40 w-2/3 text-3xl font-normal md:w-1/3"
        asChild
      >
        <Link href="/manual">Manual</Link>
      </Button>
      <Button
        variant="outline"
        className="h-40 w-2/3 text-3xl font-normal md:w-1/3"
        asChild
      >
        <Link href="/auto">Automatic</Link>
      </Button>
    </main>
  );
}
