import { auth, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { Content } from "./components/Content";

export default async function Home() {
  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-in"); // 🔐 Redireciona para login se não estiver autenticado
  }

  // Redirect authenticated users to the dashboard
  redirect("/dashboard/investimentos");
}
