import { ReactNode } from "react";
import Navbar from "../Navbar";

interface Shell {
  children: ReactNode;
}

export default function Shell({ children }: Shell) {
  return (
    <main className="flex h-screen w-full flex-col">
      <Navbar />
      <section className="h-full w-full">{children}</section>
    </main>
  );
}
