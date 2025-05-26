
import { Calendar, Home, Inbox, Search, Settings } from "lucide-react"
import logo from "@/public/logos/logo_valore.png";
import Link from "next/link";
import { SidebarSeparator } from "@/app/components/ui/sidebar";

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
    <Sidebar collapsible="icon">
      <SidebarContent>
      <Link href="/" className="flex justify-center pt-6 pb-6">
          <img
            src={logo.src}
            alt="Logo"
            className="h-13 w-auto"
          />
        </Link>
        <SidebarSeparator />
        <SidebarGroup className="pt-6 ">
          {/* <SidebarGroupLabel>Application</SidebarGroupLabel> */}
          <SidebarGroupContent>
            <SidebarMenu className="gap-3">
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="text-light font-inter font-medium gap-4" >
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
