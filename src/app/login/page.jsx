"use client";
import { signIn } from "next-auth/react";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <button
        onClick={() => signIn("google")}
        className="bg-blue-600 px-6 py-3 rounded-lg text-xl font-bold"
      >
        Sign in with Google
      </button>
    </div>
  );
}
