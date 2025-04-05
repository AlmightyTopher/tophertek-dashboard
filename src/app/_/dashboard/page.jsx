"use client";
import { useSession, signIn } from "next-auth/react";
import { useEffect } from "react";

export default function DashboardPage() {
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === "unauthenticated") signIn("google");
  }, [status]);

  if (status === "loading") return <p>Loading...</p>;

  return (
    <div className="p-10 text-white bg-gray-900 min-h-screen">
      <h1 className="text-4xl font-bold">Welcome, {session.user.name}</h1>
      <p className="mt-4 text-lg">Only you can see this dashboard 😎</p>
    </div>
  );
}
