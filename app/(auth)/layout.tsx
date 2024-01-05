"use client"
import Link from "next/link";

import { usePathname } from "next/navigation";
const navLinks = [
    { name: "Register", href: "/register" },
    { name: "Login", href: "/login" },
];


export default function AuthLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const pathname = usePathname();
    return (
        <>
            {navLinks.map((link) => {
                const isActive = pathname.startsWith(link.href)

                return (
                    <Link href={link.href} className={isActive ? 'font-bold mr-4' : "text-blue-700"} key={link.href} >
                        {link.name}
                    </Link >
                )

            })
            }
            {children}

        </>
    )
}
