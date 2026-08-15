import Link from "next/link";
import type { ReactNode, MouseEventHandler } from "react";

type Variant = "gold" | "ghost" | "pearl";

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
  gold: "text-obsidian bg-[linear-gradient(120deg,#e6cf8d,#c8a44b_55%,#a8873a)] shadow-[0_10px_34px_-10px_rgba(200,164,75,0.55)] hover:brightness-110",
  ghost:
    "border border-pearl/25 text-pearl hover:border-gold/60 hover:text-gold-soft",
  pearl: "bg-pearl text-obsidian hover:bg-white",
};

export default function Button({
  children,
  href,
  onClick,
  variant = "gold",
  className = "",
  type = "button",
  disabled,
}: ButtonProps) {
  const cls = `font-ui inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-[13px] font-semibold uppercase tracking-[0.16em] transition-all duration-300 active:scale-[0.97] disabled:opacity-50 disabled:pointer-events-none ${styles[variant]} ${className}`;
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
