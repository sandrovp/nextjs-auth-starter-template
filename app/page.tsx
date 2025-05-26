import { auth, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { Content } from "./components/Content";

export default async function Home() {
  return (
    <main className="flex h-screen w-screen flex-col">
      Teste
    </main>
  );
}
