import { getProfile } from "@/app/actions/profile";
import AdminProfileForm from "@/components/admin/AdminProfileForm";
import AdminPasswordForm from "@/components/admin/AdminPasswordForm";

export const dynamic = "force-dynamic";

export default async function AdminProfilePage() {
  const result = await getProfile();
  
  // If no auth, getProfile returns success: false. We could redirect to login here,
  // but Layout usually handles it or the auth middleware.

  return (
    <div className="max-w-4xl mx-auto py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-serif-display font-bold text-neutral-900 tracking-tight">My Profile</h1>
        <p className="text-neutral-500 mt-1">Manage your personal information and bio.</p>
      </div>

      {result.success ? (
        <>
          <AdminProfileForm initialProfile={result.profile} />
          <AdminPasswordForm />
        </>
      ) : (
        <div className="p-6 bg-rose-50 text-rose-600 rounded-2xl border border-rose-100">
          Failed to load profile. Please make sure you are logged in.
        </div>
      )}
    </div>
  );
}
