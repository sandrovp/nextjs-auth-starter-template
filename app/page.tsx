import { auth, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { Sidebar } from "./components/Sidebar";
import { Content } from "./components/Content";

export default async function Home() {
  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-in"); // 🔐 Redireciona para login se não estiver autenticado
  }

  const user = await currentUser();

  return (
    <div className="flex min-h-screen h-full bg-gray-600">
      <Sidebar />
      <Content user={user} />
    </div>
  );
}
