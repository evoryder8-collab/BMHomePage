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
  gold: "bm-button-primary",
  ghost: "bm-button-ghost",
  pearl: "bm-button-pearl",
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
  const cls = `btn-leaf font-ui inline-flex items-center justify-center gap-2 px-7 py-3 text-[11px] font-semibold uppercase tracking-[0.16em] disabled:opacity-50 disabled:pointer-events-none ${styles[variant]} ${className}`;
  if (href) {
    return (
      <Link href={href} className={cls}>
        <span className="btn-leaf-label">{children}</span>
      </Link>
    );
  }
  return (
    <button type={type} onClick={onClick} className={cls} disabled={disabled}>
      <span className="btn-leaf-label">{children}</span>
    </button>
  );
}
