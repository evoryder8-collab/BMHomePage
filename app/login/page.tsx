import type { Metadata } from "next";
import AuthForm from "@/components/auth/AuthForm";

export const metadata: Metadata = {
  title: "Log in",
  description: "Access your Barbu Media licenses, downloads and invoices.",
};

export default function LoginPage() {
  return (
    <div className="container-page flex min-h-[70vh] items-center justify-center py-20">
      <AuthForm mode="login" />
    </div>
  );
}
