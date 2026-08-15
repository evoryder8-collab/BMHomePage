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
  gold: "text-white bg-[linear-gradient(120deg,#48986c,#2e7d54_55%,#1c5136)] shadow-[0_14px_34px_-12px_rgba(46,125,84,0.55)] hover:brightness-110",
  ghost:
    "border border-ink/30 bg-white/30 text-ink backdrop-blur hover:border-jade hover:text-jade-deep",
  pearl: "bg-ink text-linen hover:bg-ink-soft",
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
  const cls = `btn-leaf font-ui inline-flex items-center justify-center gap-2 px-8 py-3.5 text-[13px] font-semibold uppercase tracking-[0.16em] disabled:opacity-50 disabled:pointer-events-none ${styles[variant]} ${className}`;
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
