"use client";

import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { type Route } from "next";
import { twMerge } from "tailwind-merge";

export type ActiveLinkProps = {
	className?: string;
	activeClassName?: string;
	children: React.ReactNode;
	href: Route;
	exact?: boolean;
	about?: string;
};
export const ActiveLink = ({ children, href, className, activeClassName, exact, about }: ActiveLinkProps) => {
	const currentPathname = usePathname();

	const isActive = exact ? currentPathname === href : currentPathname.startsWith(href);
	const aria = isActive ? { "aria-current": true } : {};
	const classes = clsx(
		`text-xl text-blue-400 transition-colors duration-200 ease-in-out hover:text-blue-600`,
		{
			underline: isActive,
			activeClassName: isActive && activeClassName,
		},
		className,
	);

	return (
		<Link {...aria} href={href} className={twMerge(classes)} about={about}>
			{children}
		</Link>
	);
};
