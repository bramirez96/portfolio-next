"use client";

import { useUser } from "@clerk/nextjs";

export default function WelcomeMessage() {
  const { user, isSignedIn } = useUser();

  if (isSignedIn && user) {
    return (
      <div className="h-full w-full text-2xl">Welcome, {user.firstName}!</div>
    );
  }

  return <div className="h-full w-full text-2xl">Welcome!</div>;
}
