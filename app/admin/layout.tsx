import localFont from "next/font/local";
import "../globals.css";
import Link from "next/link";

export default function AdminLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>

            <header className="flex items-center justify-between px-[60px] py-7 bg-indigo-600 text-white">

                <Link href="/" className="text-[36px] font-bold leading-[24px]">Auth</Link>

                <nav className="flex gap-7">

                    <Link href="/" className="text-[21px] font-medium hover:text-red-500 hover:scale-105 transition-all">Add</Link>
                    <Link href="/" className="text-[21px] font-medium hover:text-red-500 hover:scale-105 transition-all">Users</Link>
                    <Link href="/" className="text-[21px] font-medium hover:text-red-500 hover:scale-105 transition-all">Orders</Link>
                    <Link href="/" className="text-[21px] font-medium hover:text-red-500 hover:scale-105 transition-all">Chan Del</Link>

                </nav>

                <button className="bg-red-500 font-bold py-3 px-6 rounded shadow-lg transform transition duration-300 ease-in-out hover:bg-red-600 hover:scale-105 hover:shadow-2xl">Log out</button>

            </header>

            {children}

        </>
    );
}