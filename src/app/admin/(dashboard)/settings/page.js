import { listAdminUsers } from "@/app/actions/profile";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { User, ShieldCheck } from "lucide-react";

export const dynamic = "force-dynamic";

export default async function AdminSettingsPage() {
  const result = await listAdminUsers();
  const admins = result.success ? result.admins : [];

  return (
    <div className="max-w-4xl mx-auto py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-serif-display font-bold text-neutral-900 tracking-tight">Settings</h1>
        <p className="text-neutral-500 mt-1">Manage system configurations and users.</p>
      </div>

      <div className="grid gap-8">
        {/* Admin Users Section */}
        <section>
          <div className="flex items-center gap-2 mb-4">
            <ShieldCheck className="w-5 h-5 text-neutral-700" />
            <h2 className="text-xl font-bold text-neutral-900">Admin Users</h2>
          </div>
          <Card className="rounded-2xl shadow-sm border-neutral-200/60 overflow-hidden">
            <CardHeader className="bg-neutral-50/50 border-b border-neutral-100 pb-6">
              <CardTitle className="text-base">Authorized Administrators</CardTitle>
              <CardDescription>People who have access to this dashboard.</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              {admins.length > 0 ? (
                <div className="divide-y divide-neutral-100">
                  {admins.map((admin) => (
                    <div key={admin.id} className="flex items-center gap-4 p-4 hover:bg-neutral-50 transition-colors">
                      <div className="w-10 h-10 rounded-full bg-neutral-100 border border-neutral-200 flex items-center justify-center overflow-hidden shrink-0">
                        {admin.avatar_url ? (
                          <img src={admin.avatar_url} alt={admin.full_name || "Admin"} className="w-full h-full object-cover" />
                        ) : (
                          <User className="w-5 h-5 text-neutral-400" />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-neutral-900 text-sm truncate">
                          {admin.full_name || "Unknown Name"}
                        </p>
                        <p className="text-xs text-neutral-500 truncate">
                          ID: {admin.id.substring(0, 8)}...
                        </p>
                      </div>
                      <div className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-600 text-[10px] font-bold uppercase tracking-wide">
                        {admin.role}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-8 text-center text-neutral-500">
                  <User className="w-8 h-8 mx-auto text-neutral-300 mb-3" />
                  <p>No admin profiles found.</p>
                  <p className="text-xs mt-1">Make sure the database trigger has run for your user.</p>
                </div>
              )}
            </CardContent>
          </Card>
        </section>
        
        {/* Future settings sections can go here */}
      </div>
    </div>
  );
}
