import Link from "next/link";
import type { ReactNode, MouseEventHandler } from "react";

type Variant = "primary" | "ghost" | "gold";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  variant?: Variant;
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
}

const styles: Record<Variant, string> = {
  primary:
    "bg-ink text-ivory hover:bg-ink-soft shadow-sm hover:shadow-md",
  ghost:
    "border border-ink/20 text-ink hover:border-ink/50 hover:bg-ink/5",
  gold: "bg-gold text-ivory hover:bg-gold-soft shadow-sm hover:shadow-md",
};

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
  type = "button",
  disabled,
}: ButtonProps) {
  const cls = `inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-200 disabled:opacity-50 disabled:pointer-events-none ${styles[variant]} ${className}`;
  if (href) {
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }
  return (
    <button type={type} onClick={onClick} className={cls} disabled={disabled}>
      {children}
    </button>
  );
}
