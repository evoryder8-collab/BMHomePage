import type { Metadata } from "next";
import AuthForm from "@/components/auth/AuthForm";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Log in",
  description: "Access your Barbu Media licenses, downloads and invoices.",
  path: "/login/",
  noIndex: true,
});

export default function LoginPage() {
  return (
    <div className="container-page flex min-h-[70vh] items-center justify-center py-20">
      <AuthForm mode="login" />
    </div>
  );
}
