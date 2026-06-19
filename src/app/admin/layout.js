import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/admin/AppSidebar";

export const metadata = {
  title: "Admin Dashboard — Ayush Solanki",
  description: "Portfolio Admin Dashboard",
};

export default function AdminLayout({ children }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="min-h-screen w-full bg-[#fbfaf8] flex flex-col">
        {/* Top Header */}
        <header className="sticky top-0 z-10 w-full flex items-center h-16 px-4 bg-white/80 backdrop-blur-md shadow-sm">
          <SidebarTrigger className="mr-4 text-neutral-600 hover:text-neutral-900" />
          <div className="font-medium text-[14px] text-neutral-800">
            Admin Dashboard
          </div>
        </header>
        
        {/* Main Content Area */}
        <div className="flex-1 p-6 sm:p-10">
          {children}
        </div>
      </main>
    </SidebarProvider>
  );
}
