
import { Calendar, Home, Inbox, Search, Settings } from "lucide-react"
import Image from "next/image";
import logo from "@/public/logos/logo_valore.png";
import Link from "next/link";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/app/components/ui/sidebar"

// Menu items.
const items = [
  {
    title: "Carteira",
    url: "/",
    icon: Home,
  },
  {
    title: "Portfolio",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Documentos",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Oportunidades",
    url: "#",
    icon: Search,
  },
]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
      <Link href="/" className="flex justify-center p-8">
          <img
            src={logo.src}
            alt="Logo"
            className="h-10 w-auto"
          />
        </Link>
        <SidebarGroup>
          {/* <SidebarGroupLabel>Application</SidebarGroupLabel> */}
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
