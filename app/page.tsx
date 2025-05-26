import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { SidebarProvider, SidebarTrigger } from "@/app/components/ui/sidebar";
import { AppSidebar } from "./components/app-sidebar";
import Investimentos from "./components/Investimentos";

export default async function Home() {
  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-in");
  }

  return (
    <SidebarProvider>
      <div className="flex h-screen w-full overflow-hidden">
        <AppSidebar />
        <main className="flex flex-1 flex-col overflow-y-auto overflow-x-hidden">

          <SidebarTrigger className="absolute" />
          <Investimentos />
        </main>
      </div>
    </SidebarProvider>
  );
}
