import { createServerClient } from "@supabase/ssr";
import { NextResponse } from "next/server";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

export const updateSession = async (request) => {
  let supabaseResponse = NextResponse.next({
    request: {
      headers: request.headers,
    },
  });

  const supabase = createServerClient(
    supabaseUrl,
    supabaseKey,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll()
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) => request.cookies.set(name, value))
          supabaseResponse = NextResponse.next({
            request,
          })
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          )
        },
      },
    },
  );
  
  // Refresh the session and get the user
  const { data: { user } } = await supabase.auth.getUser()

  const url = request.nextUrl.clone()
  const isAuthRoute = url.pathname.startsWith('/admin/login')
  const isAdminRoute = url.pathname.startsWith('/admin')

  // If trying to access admin routes (but not login) without being logged in, redirect to login
  if (!user && isAdminRoute && !isAuthRoute) {
    url.pathname = '/admin/login'
    return NextResponse.redirect(url)
  }

  // If trying to access login page while already logged in, redirect to admin dashboard
  if (user && isAuthRoute) {
    url.pathname = '/admin'
    return NextResponse.redirect(url)
  }

  return supabaseResponse
};
