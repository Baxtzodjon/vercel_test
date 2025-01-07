"use client"

import Link from "next/link"

const Header = () => {
    return (
        <header className="p-5 bg-indigo-500 shadow md:flex md:items-center md:justify-between">

            <Link href="/" className="text-[#ffffff] text-2xl font-bold leading-[24px]">Logo</Link>

            <ul className="md:flex md:items-center gap-10">

                <li><Link href="/" className="text-[#ffffff] text-xl hover:text-cyan-500 duration-500">Home</Link></li>
                <li><Link href="/about" className="text-[#ffffff] text-xl hover:text-cyan-500 duration-500">About</Link></li>
                <li><Link href="/register" className="text-[#ffffff] text-xl hover:text-cyan-500 duration-500">Sign Up</Link></li>
                <li><Link href="/" className="text-[#ffffff] text-xl hover:text-cyan-500 duration-500">Likes</Link></li>
                <li><Link href="/" className="text-[#ffffff] text-xl hover:text-cyan-500 duration-500">Cart</Link></li>

                <button className="bg-cyan-400 text-white px-6 py-2 mx-4 rounded hover:bg-cyan-500 duration-500">Get Started</button>

            </ul>

        </header>
    )
}

export default Header;