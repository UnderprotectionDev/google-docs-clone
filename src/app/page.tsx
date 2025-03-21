import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center ">
      Click{" "}
      <Link href="/documents/123" className="text-blue-500 underline">
        here
      </Link>
    </div>
  );
}
