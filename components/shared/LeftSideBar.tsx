"use client"
import { sidebarLinks } from "@/constants"
import Image from "next/image"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import {SignOutButton, SignedIn } from "@clerk/nextjs"


function LeftSideBar() {
    const router = useRouter()
    const pathName = usePathname()

    return (
        <section className="custom-scrollbar leftsidebar"> 
            <div className="flex w-full flex-col flex-1 gap-6 px-6">
                {sidebarLinks.map((link) => {
                    const isActive = (pathName.includes(link.route) && link.route.length > 1 || pathName === link.route)
                   return (
                    <Link 
                        href={link.route}
                        key={link.label}
                        className={`leftsidebar_link ${isActive && "bg-primary-500"}`}
                    >
                        <Image
                            src={link.imgURL}
                            alt={link.label}
                            width={24}
                            height={24}
                        />
                            <p className="text-light-1 max-lg:hidden">
                                {link.label}
                            </p>
                        
                    </Link>
                   )
                })}
            </div>
            <div className="mt-10 px-6">
            <SignedIn>
                <SignOutButton signOutCallback={() => router.push("/sign-in")}>
                    <div className="flex cursor-pointer gap-4 p-4">
                        <Image
                        src="/assets//logout.svg"
                        alt="logout"
                        width={24}
                        height={24}
                        />
                        <p className="text-light-2 max-lg:hidden">
                            Logout
                        </p>
                    </div>                  
                </SignOutButton>
            </SignedIn> 
            </div>
        </section>
    )
}
export default LeftSideBar