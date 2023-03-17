import { PropsWithChildren } from "react";
import Link, { type LinkProps } from "next/link";
import { useRouter } from "next/router";

export const NavLink: React.FC<
  PropsWithChildren<LinkProps & { className?: string }>
> = ({ href, children, className, ...rest }) => {
  const router = useRouter();

  const isActive = router.pathname === href;

  return (
    <Link
      className={isActive ? className + " active" : className}
      href={href}
      {...rest}
    >
      {children}
    </Link>
  );
};
