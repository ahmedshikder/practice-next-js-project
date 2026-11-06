'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {

    const pathname = usePathname();

    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                </div>
                <Image src="/Logo Ahmed.svg" alt="Logo" width={100} height={50} />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link className={pathname === '/menu' ? "text-[#FF3131]" : ''} href="/menu">Menu</Link></li>
                    <li><Link className={pathname === '/post' ? "text-[#FF3131]" : ''} href="/post">Post</Link></li>
                    <li><Link className={pathname === '/dashboard' ? "text-[#FF3131]" : ''} href="/dashboard">Dashboard</Link></li>
                    <li><Link className={pathname === '/searchfood' ? "text-[#FF3131]" : ''} href="/searchfood">Search Food</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Button</a>
            </div>
        </div>
    );
};

export default Navbar;