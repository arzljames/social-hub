"use client";

import React from "react";
import { NAV_LINKS } from "@/constant";
import { usePathname } from "next/navigation";
import { IconType } from "react-icons";

interface NavigationProps {
  name: string;
  link: string | null;
  activeIcon: IconType;
  inactiveIcon: IconType;
}

const Navigation = () => {
  const path = usePathname();
  return (
    <ul className="mt-4">
      {NAV_LINKS.map((item: NavigationProps, index: number) => {
        return (
          <li
            className={`w-full py-3 px-2 rounded-md mb-3 transition hover:bg-gray-100 cursor-pointer flex items-center text-sm text-text-primary ${
              path === item.link ? "font-semibold bg-gray-100" : "font-normal"
            }`}
            key={index}
          >
            {path === item.link ? (
              <item.activeIcon size={16} className="mr-2" />
            ) : (
              <item.inactiveIcon size={16} className="mr-2" />
            )}{" "}
            {item.name}
          </li>
        );
      })}
    </ul>
  );
};

export default Navigation;
