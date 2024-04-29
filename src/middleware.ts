import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// Creates a middleware that protects any routes under the /dashboard route
const isProtectedRoute = createRouteMatcher(["/dashboard(.*)"]);
export default clerkMiddleware((auth, request) => {
  if (isProtectedRoute(request)) auth().protect();
});

export const config = {
  matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
