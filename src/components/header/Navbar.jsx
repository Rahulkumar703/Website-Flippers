"use client"

import Link from "next/link"
import { useState } from "react"
import { cn } from "@/lib/utils"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Menu } from "lucide-react"
import LoginBtns from "./LoginBtns"
import { Button } from "../ui/button"

const navLinks = [
    {
        title: "Blog",
        href: "/blog",
        description: "Read our latest blog posts.",
    },
    {
        title: "Pricing",
        href: "/pricing",
        description: "Pricing for all plans and services.",
    },
    {
        title: "Services",
        href: "/services",
        description: "Services we offer.",
    },
]

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    return (
        <div className="sm:hidden">
            <Button size="icon" variant="ghost"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="focus:outline-none md:hidden"
            >
                <Menu className="w-6 h-6" />
            </Button>
            {isMobileMenuOpen && (
                <div className={'flex flex-col items-center justify-between fixed top-[58px] bg-secondary right-0 h-[calc(100dvh-58px)] w-full max-w-sm gap-4 p-6'}>
                    <NavigationMenu className="h-auto flex-[0] w-full">
                        <NavigationMenuList className="flex-col items-center gap-4">
                            {
                                navLinks.map((link, index) => {
                                    if (link?.submenu?.length) {
                                        return (
                                            <NavigationMenuItem key={index} className="">
                                                <NavigationMenuTrigger>{link.title}</NavigationMenuTrigger>
                                                <NavigationMenuContent>
                                                    <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] ">
                                                        {
                                                            link.submenu.map((item, index) => {
                                                                return (
                                                                    <ListItem key={index} href={item.href} title={item.title}>
                                                                        {item.description}
                                                                    </ListItem>
                                                                )
                                                            })
                                                        }
                                                    </ul>
                                                </NavigationMenuContent>
                                            </NavigationMenuItem>
                                        )
                                    }
                                    else
                                        return (
                                            <NavigationMenuItem key={index}>
                                                <Link href={link.href} legacyBehavior passHref>
                                                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                                        {link.title}
                                                    </NavigationMenuLink>
                                                </Link>
                                            </NavigationMenuItem>
                                        )
                                })
                            }
                        </NavigationMenuList>
                    </NavigationMenu>
                    <LoginBtns className={'flex-wrap gap-4 w-full'} />
                </div>
            )
            }
        </div >
    )
}

const DesktopNavbar = () => (
    <div className="hidden sm:flex flex-1 justify-between">
        <NavigationMenu>
            <NavigationMenuList>
                {
                    navLinks.map((link, index) => {
                        if (link?.submenu?.length) {
                            return (
                                <NavigationMenuItem key={index}>
                                    <NavigationMenuTrigger>{link.title}</NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] ">
                                            {
                                                link.submenu.map((item, index) => {
                                                    return (
                                                        <ListItem key={index} href={item.href} title={item.title}>
                                                            {item.description}
                                                        </ListItem>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>
                            )
                        }
                        else
                            return (
                                <NavigationMenuItem key={index}>
                                    <Link href={link.href} legacyBehavior passHref>
                                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                            {link.title}
                                        </NavigationMenuLink>
                                    </Link>
                                </NavigationMenuItem>
                            )
                    })
                }
            </NavigationMenuList>
        </NavigationMenu>
        <LoginBtns />
    </div>
)
export const ListItem = ({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
}

ListItem.displayName = "ListItem"

export default function ResponsiveNavbar() {
    return (
        <>
            <Navbar />
            <DesktopNavbar />
        </>
    )
}
