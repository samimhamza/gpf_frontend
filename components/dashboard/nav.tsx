"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "./nav-item";

export const Nav = () => {
	const pathname = usePathname();
	return (
		<nav>
			<ul className="space-y-1 p-3 mt-4">
				{navItems.map((nav, i) => (
					<li
						key={i}
						className={`text-dashboard-nav-text hover:text-dashboard-active ${
							pathname == "/dashboard" &&
							nav.link == "/dashboard" &&
							"bg-dashboard-nav-hover "
						} 
                    ${nav.link == pathname && "bg-dashboard-nav-hover "}
                      px-3 py-1 rounded-lg  text-sm  hover:bg-dashboard-nav-hover`}
					>
						<Link
							href={nav.link}
							className={`hover:text-dashboard-active flex  items-center 
                        ${
													pathname == "/dashboard" &&
													nav.link == "/dashboard" &&
													" text-dashboard-main"
												}
                        ${nav.link == pathname && " text-dashboard-main"}
                        font-semibold `}
						>
							<span
								className={`m-1 mx-1 mr-4 ${
									pathname == "/dashboard" &&
									nav.link == "/dashboard" &&
									"text-dashboard-active"
								}
                            ${nav.link == pathname && "text-dashboard-active"}
                            `}
							>
								{nav.icon}
							</span>
							{nav.title}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
};
