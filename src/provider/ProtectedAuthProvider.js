"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function ProtectedAuthProvider({ children }) {
  const session = useSession();
  const router = useRouter();
  if (session.status === "loading") {
    return <p>Loading...</p>;
  }

  if (session.status === "authenticated") {
    return children;
  }

  return router.push("/register");
}
