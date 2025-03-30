"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLinks = () => {
  const pathname = usePathname();
  // const navigate = useNavigate();

  const routes = [
    {
      href: "/",
      title: "Home",
      active: pathname === "/",
    },
    {
      href: "/menu",
      title: "Menu",
      active: pathname === "/menu",
    },

    {
      href: "/contact",
      title: "Contact",
      active: pathname === "/contact",
    },
  ];
  return (
    <div className="flex items-center gap-6">
      {routes.map((route) => (
        <Link key={route.href} href={route.href}>
          <span
            className={
              route.active
                ? "font-semibold underline text-orange-400"
                : "hover:text-orange-400 text-white"
            }
          >
            {" "}
            {route.title}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default NavLinks;
