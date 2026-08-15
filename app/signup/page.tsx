import type { Metadata } from "next";
import AuthForm from "@/components/auth/AuthForm";

export const metadata: Metadata = {
  title: "Create account",
  description: "One account for every Barbu Media instrument.",
};

export default function SignupPage() {
  return (
    <div className="container-page flex min-h-[70vh] items-center justify-center py-20">
      <AuthForm mode="signup" />
    </div>
  );
}
