import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Button variant="link">Start Now!</Button>
      <h1 className="font-bold">H1</h1>
    </main>
  );
}
