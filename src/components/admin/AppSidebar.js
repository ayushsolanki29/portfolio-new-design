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
  SidebarHeader,
  SidebarFooter,
} from "@/components/ui/sidebar";
import { Home, FolderDot, Lightbulb, Mail, Settings, User, BarChart3 } from "lucide-react";

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader className="p-4">
        <div className="flex items-center gap-2 font-serif-display font-bold text-xl text-neutral-900 tracking-tight">
          <div className="w-8 h-8 rounded-full bg-neutral-900 text-white flex items-center justify-center text-sm">
            AS
          </div>
          Admin
        </div>
      </SidebarHeader>
      
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-neutral-500 font-semibold uppercase tracking-widest text-[10px]">
            Overview
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton render={<Link href="/admin" className="gap-3 font-medium text-neutral-700 hover:text-neutral-950" />}>
                  <Home className="w-4 h-4" />
                  <span>Dashboard</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton render={<Link href="/admin/analytics" className="gap-3 font-medium text-neutral-700 hover:text-neutral-950" />}>
                  <BarChart3 className="w-4 h-4" />
                  <span>Analytics</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton render={<Link href="/admin/projects" className="gap-3 font-medium text-neutral-700 hover:text-neutral-950" />}>
                  <FolderDot className="w-4 h-4" />
                  <span>Projects</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton render={<Link href="/admin/thoughts" className="gap-3 font-medium text-neutral-700 hover:text-neutral-950" />}>
                  <Lightbulb className="w-4 h-4" />
                  <span>Thoughts</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton render={<Link href="/admin/messages" className="gap-3 font-medium text-neutral-700 hover:text-neutral-950" />}>
                  <Mail className="w-4 h-4" />
                  <span>Messages</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className="text-neutral-500 font-semibold uppercase tracking-widest text-[10px]">
            System
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton render={<Link href="/admin/settings" className="gap-3 font-medium text-neutral-700 hover:text-neutral-950" />}>
                  <Settings className="w-4 h-4" />
                  <span>Settings</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton render={<Link href="/admin/profile" className="gap-3 font-medium text-neutral-700 hover:text-neutral-950" />}>
                  <User className="w-4 h-4" />
                  <span>Profile</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      
      <SidebarFooter className="p-4 text-xs text-neutral-400 font-medium">
        Portfolio Admin &copy; 2026
      </SidebarFooter>
    </Sidebar>
  );
}
