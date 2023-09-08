"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import classNames from "classnames";

export default function Menu() {
  const pathname = usePathname();

  const navLinks = [
    { id: 1, name: "Home", href: "/", ico: "/home.png" },
    { id: 2, name: "Films", href: "/film", ico: "/movie-projector.png" },
  ];
  return (
    <nav>
      <ul className="flex flex-col">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <li
              key={link.id}
              className={classNames("w-full h-20 cursor-pointer", {
                "bg-slate-600 shadow-md border-r-4 border-slate-300": isActive,
              })}
            >
              <Link
                href={link.href}
                className="flex w-full h-full justify-start items-center ml-10"
              >
                <Image
                  className="w-[25px] h-[25px] mr-4"
                  alt={link.name}
                  src={link.ico}
                  width={25}
                  height={25}
                />
                <div
                  className={classNames("text-xl font-semibold text-gray-500", {
                    "text-shadow-sm shadow-black/25": isActive,
                  })}
                >
                  {link.name}
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
